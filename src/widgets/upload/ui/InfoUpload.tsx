"use client";

import Image from "next/image";
import React, {
  useState,
  type ChangeEvent,
  type Dispatch,
  type SetStateAction,
} from "react";

import { ICON_IMAGE, ICON_DOCS } from "@/shared/constants";
import { post_my_info } from "@/widgets/upload/api/upload.action";
import { T_Post, TAG } from "@/entity/info/post";
import { T_Loading } from "@/shared/types/load";
import { isPostKey } from "@/shared";

function InfoUpload() {
  const [errMsg, setErrMsg] = useState<string>("");
  const [loading, setLoading] = useState<T_Loading>(0);

  const [isSetup, setIsSetup] = useState<boolean>(false);
  const [postInfo, setPostInfo] = useState<T_Post>({
    title: "",
    body: "",
    description: "",
    tag: "TIP",
  });

  const onChangeTtitle = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (isPostKey(name)) {
      setPostInfo({
        ...postInfo,
        [name]: value,
      });
    }
  };

  const onChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (isPostKey(name)) {
      setPostInfo({
        ...postInfo,
        [name]: value,
      });
    }
  };

  const onSubmitPost = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setIsSetup(true);
    }
  };

  const submitLogic = async (e: KeyboardEvent) => {
    e.preventDefault();
    setLoading(1);
    if (postInfo.title === "" || postInfo.body === "") {
      setLoading(-1);
      setErrMsg("제목 및 내용을 작성해주세요!");
      setTimeout(() => {
        setLoading(0);
      }, 2000);
    } else {
      setLoading(2);
      post_my_info(postInfo)
        .then((data) => {
          setPostInfo({
            title: "",
            body: "",
            description: "",
            tag: "TIP",
          });
          setLoading(0);
        })
        .catch((err) => {
          setErrMsg(err);
        });
    }
  };

  return (
    <div className="relative px-10 py-5 w-full flex justify-start items-start rounded-2xl bg-[#FAFAFA] gap-2 shadow-lg">
      <div className="w-20 rounded-full flex justify-center items-start">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#ee9ca7] to-[#ffdde1]" />
      </div>
      <div className="px-5 w-full flex flex-col justify-start items-start gap-4">
        <input
          type="text"
          placeholder="제목을 입력해주세요"
          className="px-4 py-2 w-full h-12 rounded-xl font-pretendard text-sm text-black"
          name="title"
          required
          onChange={onChangeTtitle}
        />
        <textarea
          placeholder="내용을 입력해주세요"
          className="px-4 py-3 w-full h-16 rounded-xl font-pretendard text-sm text-black resize-y"
          name="body"
          required
          onChange={onChangeText}
        />
        <div className="w-full flex justify-start items-center gap-8">
          <div className="w-fit flex justify-start items-center gap-4 cursor-pointer">
            <Image src={ICON_IMAGE} alt="ICON_IMAGE" width={20} height={20} />
            <span className="font-pretendard font-semibold text-xs text-black">
              Image
            </span>
          </div>
          <div className="w-fit flex justify-start items-center gap-4 cursor-pointer">
            <Image src={ICON_DOCS} alt="ICON_DOCS" width={20} height={20} />
            <span className="font-pretendard font-semibold text-xs text-black">
              Document
            </span>
          </div>
        </div>
        <UploadOptionBar
          onSubmit={submitLogic}
          onStateChange={setIsSetup}
          target={postInfo}
          onTagChange={setPostInfo}
        />
      </div>
    </div>
  );
}

export { InfoUpload };

import {
  ICON_PROJECT,
  ICON_RESUME,
  ICON_INFORMATION,
} from "@/shared/constants";

type UploadOptionBarType = {
  onStateChange: Dispatch<SetStateAction<boolean>>;
  onSubmit: (e: KeyboardEvent) => Promise<void>;
  target: T_Post;
  onTagChange: Dispatch<SetStateAction<T_Post>>;
};

type TAGLIST = {
  name: TAG;
  image: string;
};

function UploadOptionBar({
  onStateChange,
  onSubmit,
  target,
  onTagChange,
}: UploadOptionBarType) {
  const onSubmitPost = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onStateChange(true);
      onSubmit(e);
    }
  };

  const onClickTag = (value: TAG) => {
    onTagChange({
      ...target,
      ["tag"]: value,
    });
  };

  const tagList: TAGLIST[] = [
    { name: "TIP", image: ICON_INFORMATION },
    { name: "PROJECT", image: ICON_PROJECT },
    { name: "RESUME", image: ICON_RESUME },
  ];

  return (
    <div className="py-2 w-full h-fit flex justify-between items-center gap-4">
      <div className="min-w-60 w-2/3 h-12 flex justify-start items-center gap-8">
        {tagList.map((item, key) => {
          return (
            <div
              className="px-3 py-1 min-w-24 w-fit min-h-12 h-12 flex justify-center items-center gap-4 cursor-pointer rounded-full hover:border border-black"
              onClick={() => onClickTag(item.name)}
              key={key}
            >
              <Image
                src={item.image}
                alt={`icon-${key}`}
                width={15}
                height={15}
              />
              <span className="font-pretendard font-semibold text-sm text-black">
                {item.name}
              </span>
            </div>
          );
        })}
      </div>
      <div className="button-layer w-fit flex justify-center items-center gap-4">
        <button
          type="button"
          onChange={() => onStateChange(false)}
          className="w-14 h-10 font-pretendard font-light text-sm bg-softwhite text-black border rounded-md"
        >
          Cancel
        </button>
        <button
          type="submit"
          onClick={onSubmit}
          className="w-14 h-10 font-pretendard font-light text-sm bg-softblack text-white rounded-md"
          onKeyDown={onSubmitPost}
        >
          Upload
        </button>
      </div>
    </div>
  );
}
