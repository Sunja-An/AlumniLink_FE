"use client";

import React from "react";

import Image from "next/image";
import { useRouter } from "next/navigation";

import type { TAG } from "@/entity";
import {
  cn,
  Datepicker,
  Editor,
  ICON_ARROW,
  LinkEditor,
  NumberInput,
  TextAreaEditor,
  useEditForm,
} from "@/shared";

type TagNameListType = {
  type: TAG;
  name: string;
};

function EditWidget() {
  const router = useRouter();

  const {
    tipInfo,
    questionInfo,
    projectInfo,
    tag,
    setTag,
    onChange,
    onChangeBody,
    onChangeInput,
    onChangeNumber,
    onSubmit,
  } = useEditForm();

  const tagNameList: TagNameListType[] = [
    { type: "TIP", name: "Tip" },
    { type: "QUESTION", name: "질문" },
    { type: "PROJECT", name: "프로젝트 공고" },
  ];

  const TextCalculator = (tag: TAG) => {
    if (tag === "TIP") {
      if (tipInfo.title.length >= 0 && tipInfo.title.length < 100) {
        return (
          <div className="w-full flex justify-end items-center">
            <span className="font-pretendard font-bold text-xs text-black">
              글자 수 -
            </span>
            <span className="font-pretendard font-bold text-xs text-black">
              {tipInfo.title.length}/100자
            </span>
          </div>
        );
      } else if (tipInfo.title.length >= 70 && tipInfo.title.length < 100) {
        return (
          <div className="w-full flex justify-end items-center">
            <span className="font-pretendard font-bold text-xs text-black">
              글자 수 -
            </span>
            <span className="font-pretendard font-bold text-xs text-red-400">
              {tipInfo.title.length}/100자
            </span>
          </div>
        );
      } else if (tipInfo.title.length === 100) {
        return (
          <div className="w-full flex justify-end items-center">
            <span className="font-pretendard font-bold text-xs text-black">
              글자 수 -
            </span>
            <span className="font-pretendard font-bold text-xs text-red-700">
              100/100자
            </span>
          </div>
        );
      }
    } else if (tag === "QUESTION") {
      if (questionInfo.title.length >= 0 && questionInfo.title.length < 70) {
        return (
          <div className="w-full flex justify-end items-center">
            <span className="font-pretendard font-bold text-xs text-black">
              글자 수 -
            </span>
            <span className="font-pretendard font-bold text-xs text-black">
              {tipInfo.title.length}/100자
            </span>
          </div>
        );
      } else if (
        questionInfo.title.length >= 70 &&
        questionInfo.title.length < 100
      ) {
        return (
          <div className="w-full flex justify-end items-center">
            <span className="font-pretendard font-bold text-xs text-black">
              글자 수 -
            </span>
            <span className="font-pretendard font-bold text-xs text-red-400">
              {tipInfo.title.length}/100자
            </span>
          </div>
        );
      } else if (questionInfo.title.length === 100) {
        return (
          <div className="w-full flex justify-end items-center">
            <span className="font-pretendard font-bold text-xs text-black">
              글자 수 -
            </span>
            <span className="font-pretendard font-bold text-xs text-red-700">
              100/100자
            </span>
          </div>
        );
      }
    } else {
      if (projectInfo.name.length >= 0 && projectInfo.name.length < 70) {
        return (
          <div className="w-full flex justify-end items-center">
            <span className="font-pretendard font-bold text-xs text-black">
              글자 수 -
            </span>
            <span className="font-pretendard font-bold text-xs text-black">
              {projectInfo.name.length}/100자
            </span>
          </div>
        );
      } else if (
        projectInfo.name.length >= 70 &&
        projectInfo.name.length < 100
      ) {
        return (
          <div className="w-full flex justify-end items-center">
            <span className="font-pretendard font-bold text-xs text-black">
              글자 수 -
            </span>
            <span className="font-pretendard font-bold text-xs text-red-400">
              {projectInfo.name.length}/100자
            </span>
          </div>
        );
      } else if (projectInfo.name.length === 100) {
        return (
          <div className="w-full flex justify-end items-center">
            <span className="font-pretendard font-bold text-xs text-black">
              글자 수 -
            </span>
            <span className="font-pretendard font-bold text-xs text-red-700">
              100/100자
            </span>
          </div>
        );
      }
    }
  };

  const TitleEdit = () => {
    if (tag === "TIP") {
      return (
        <TextAreaEditor
          row={2}
          name={"title"}
          onChange={onChange}
          maxLength={100}
          placeholder="제목을 입력해주세요."
        />
      );
    } else if (tag === "QUESTION") {
      return (
        <TextAreaEditor
          row={2}
          name={"title"}
          onChange={onChange}
          maxLength={100}
          placeholder="질문 제목을 입력해주세요."
        />
      );
    } else {
      return (
        <TextAreaEditor
          row={2}
          name={"name"}
          onChange={onChange}
          maxLength={100}
          placeholder="프로젝트 제목을 입력해주세요."
        />
      );
    }
  };

  const DescriptionEdit = () => {
    if (tag === "PROJECT") {
      return <LinkEditor value={projectInfo.link} onChange={onChange} />;
    } else {
      return (
        <TextAreaEditor
          row={1}
          name="description"
          onChange={onChange}
          maxLength={70}
          placeholder="설명란을 입력해주세요.(간단하게라도 괜찮아요!)"
        />
      );
    }
  };

  const onClickList = () => {
    router.push("/info?page=0&size=10&sort=DESC");
  };

  return (
    <form
      className="w-full flex flex-col justify-start items-start gap-8"
      onSubmit={onSubmit}
    >
      <div className="w-full flex flex-col justify-start items-start gap-4">
        {TitleEdit()}
        {TextCalculator(tag)}
      </div>
      <nav className="w-full flex justify-start items-center border-b border-gray-300">
        {tagNameList.map((item: TagNameListType, key: number) => {
          return (
            <li
              className={cn(
                "min-w-24 w-24 min-h-10 h-10 flex justify-center items-center rounded-md hover:bg-gray-300 duration-300 group",
                { "bg-softblack": tag === item.type }
              )}
              onClick={() => setTag(item.type)}
              key={key}
            >
              <span
                className={cn(
                  "font-pretendard font-bold text-sm text-gray-200 group-hover:text-gray-100 duration-300",
                  {
                    "text-white": tag === item.type,
                  }
                )}
              >
                {item.name}
              </span>
            </li>
          );
        })}
      </nav>
      <div className="w-full flex flex-col justify-start items-start gap-4">
        <span className="font-pretendard font-bold text-sm text-black">
          {tag === "PROJECT" ? "Github 주소" : "설명란"}
        </span>
        {DescriptionEdit()}
      </div>
      {tag === "PROJECT" && (
        <div className="w-full flex justify-center items-start">
          <div className="w-1/2 flex justify-center items-center">
            <NumberInput
              maxCount={10}
              onChange={onChangeNumber}
              conditionText="최대 10명까지 설정이 가능합니다."
              title="모집원 수"
              value={projectInfo.maxCount}
            />
          </div>
          <div className="w-1/2 flex justify-center items-center">
            <Datepicker
              title="마감일자"
              onChange={onChangeInput}
              value={projectInfo.deadline}
            />
          </div>
        </div>
      )}
      <div className="w-full">
        <Editor setMarkdown={onChangeBody} />
      </div>
      <div className="w-full flex justify-between items-center">
        <div
          className="px-3 min-w-44 w-44 min-h-10 flex justify-center items-center rounded-md gap-2 hover:bg-gray-400 duration-300 group"
          onClick={onClickList}
        >
          <Image
            src={ICON_ARROW}
            alt="arrow"
            className="rotate-180 group-hover:-translate-x-1 duration-300"
          />
          <span className="font-pretendard font-bold text-sm text-black">
            목록으로 돌아가기
          </span>
        </div>
        <button
          type="submit"
          className="min-w-28 w-28 min-h-10 h-10 rounded-full flex justify-center items-center bg-[#333333] hover:bg-black duration-300"
        >
          <span className="font-pretendard font-bold text-xs text-white">
            게시하기
          </span>
        </button>
      </div>
    </form>
  );
}

export { EditWidget };
