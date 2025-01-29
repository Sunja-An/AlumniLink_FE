"use client";

import Image from "next/image";
import React, { useRef, useState, type ChangeEvent } from "react";

import { ICON_IMAGE, ICON_DOCS } from "@/shared/constants";
import { post_my_info } from "@/widgets/upload/api/upload.action";
import { T_Post } from "@/entity/info/post";
import { isPostKey } from "@/shared";

function InfoUpload() {
  const [postInfo, setPostInfo] = useState<T_Post>({
    title: "",
    body: "",
    description: "",
    tag: "TIP",
  });

  const uploadBtnRef = useRef<HTMLButtonElement>(null);

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

  const submitLogic = async () => {
    post_my_info(postInfo)
      .then((data) => {
        console.log(data);
        setPostInfo({
          title: "",
          body: "",
          description: "",
          tag: "TIP",
        });
      })
      .catch((err) => {
        console.error(err);
      });
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
        <div className="w-full flex justify-between items-center">
          <div className="w-1/3 min-w-60 flex justify-start items-center gap-8">
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
          <div className="button-layer w-1/3 min-w-40 flex justify-center items-center">
            <button
              type="button"
              className="min-w-24 w-24 h-12 flex justify-center items-center rounded-full border-black border-2 hover:bg-slate-300 duration-300"
              ref={uploadBtnRef}
              onClick={submitLogic}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { InfoUpload };
