"use client";

import React from "react";

import Image from "next/image";
import { useRouter } from "next/navigation";

import type { TAG } from "@/entity";
import { cn, Editor, ICON_ARROW, TitleEditor, useEditForm } from "@/shared";

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
    onSubmit,
  } = useEditForm();

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
      return <TitleEditor name={"title"} onChange={onChange} />;
    } else if (tag === "QUESTION") {
      return <TitleEditor name={"title"} onChange={onChange} />;
    } else {
      return <TitleEditor name={"name"} onChange={onChange} />;
    }
  };

  const onClickList = () => {
    router.push("/info?page=0&size=10");
  };

  return (
    <div className="w-full flex flex-col justify-start items-start gap-8">
      <div className="w-full flex flex-col justify-start items-start gap-4">
        {TitleEdit()}
        {TextCalculator(tag)}
      </div>
      <nav className="w-full flex justify-start items-center border-b border-gray-300">
        <li
          className={cn(
            "min-w-24 w-24 min-h-10 h-10 flex justify-center items-center rounded-md hover:bg-gray-300 duration-300 group",
            { "bg-softblack": tag === "TIP" }
          )}
          onClick={() => setTag("TIP")}
        >
          <span
            className={cn(
              "font-pretendard font-bold text-sm text-gray-200 group-hover:text-gray-100 duration-300",
              {
                "text-white": tag === "TIP",
              }
            )}
          >
            TIP
          </span>
        </li>
        <li
          className={cn(
            "min-w-24 w-24 min-h-10 h-10 flex justify-center items-center rounded-md hover:bg-gray-300 duration-300 group",
            { "bg-softblack": tag === "QUESTION" }
          )}
          onClick={() => setTag("QUESTION")}
        >
          <span
            className={cn(
              "font-pretendard font-bold text-sm text-gray-200 group-hover:text-gray-100 duration-300",
              {
                "text-white": tag === "QUESTION",
              }
            )}
          >
            질문
          </span>
        </li>
        <li
          className={cn(
            "min-w-24 w-24 min-h-10 h-10 flex justify-center items-center rounded-md hover:bg-gray-300 duration-300 group",
            { "bg-softblack": tag === "PROJECT" }
          )}
          onClick={() => setTag("PROJECT")}
        >
          <span
            className={cn(
              "font-pretendard font-bold text-sm text-gray-200 group-hover:text-gray-100 duration-300",
              {
                "text-white": tag === "PROJECT",
              }
            )}
          >
            프로젝트 공고
          </span>
        </li>
      </nav>
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
          type="button"
          className="min-w-28 w-28 min-h-10 h-10 rounded-full flex justify-center items-center bg-[#333333] hover:bg-black duration-300"
          onClick={onSubmit}
        >
          <span className="font-pretendard font-bold text-xs text-white">
            게시하기
          </span>
        </button>
      </div>
    </div>
  );
}

export { EditWidget };
