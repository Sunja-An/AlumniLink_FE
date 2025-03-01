"use client";

import React from "react";
import Link from "next/link";

import type { SingleProjectType } from "@/entity";
import { cn, dueDayCalculate, timeConverter } from "@/shared";

function ProjectCard({ content }: { content: SingleProjectType }) {
  return (
    <Link
      className="px-12 py-5 w-full min-h-32 max-h-40 flex justify-start items-start rounded-xl cursor-pointer gap-4 hover:bg-slate-100 duration-300"
      href={`/project/${content.id}`}
    >
      <div className="w-3/4 flex flex-col justify-start items-start gap-6">
        <div className="w-full flex justify-start items-center">
          <span className="font-pretendard font-bold text-xl text-black">
            {content.name}
          </span>
        </div>
        <div className="w-full max-h-20 flex justify-start items-center">
          <span className="font-pretendard font-light text-base text-black whitespace-nowrap overflow-hidden text-ellipsis">
            {content.info}
          </span>
        </div>
        <div className="w-full flex justify-start items-center gap-4">
          <span className="font-pretendard font-medium text-xs text-gray-300">
            {timeConverter(content.deadline)}
          </span>
        </div>
      </div>
      <div className="w-1/4 h-full flex flex-col justify-center items-center gap-4 ">
        <div className="w-full flex justify-start items-center gap-3">
          <span className="font-pretendard font-bold text-sm text-blue-300">
            주최자
          </span>
          <span className="font-pretendard font-light text-sm text-black">
            {content.leaderName}
          </span>
        </div>
        <div className="w-full flex justify-start items-center gap-3">
          <span className="font-pretendard font-bold text-sm text-blue-300">
            모집인원
          </span>
          <div className="w-fit flex justify-center items-center gap-2">
            <span
              className={cn("font-pretendard font-light text-sm text-black", {
                "text-red-500": content.nowCount === content.maxCount,
              })}
            >
              {content.nowCount}
            </span>
            <span className="font-pretendard font-light text-sm text-black">
              /
            </span>
            <span className="font-pretendard font-light text-sm text-black">
              {content.maxCount}
            </span>
          </div>
        </div>
        <div className="w-full flex justify-start items-center gap-3">
          <span className="font-pretendard font-bold text-sm text-blue-300">
            마감일
          </span>
          <div className="w-fit flex justify-center items-center gap-2">
            <span className="font-pretendard font-light text-sm text-black">
              {dueDayCalculate(content.deadline)}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

function MyProjectCard({ content }: { content: SingleProjectType }) {
  return (
    <Link
      className="px-12 py-5 w-full min-h-32 max-h-40 flex justify-start items-start rounded-xl cursor-pointer gap-4 hover:bg-slate-100 duration-300"
      href={`/project/${content.id}`}
    >
      <div className="w-3/4 flex flex-col justify-start items-start gap-6">
        <div className="w-full flex justify-start items-center">
          <span className="font-pretendard font-bold text-xl text-black">
            {content.name}
          </span>
        </div>
        <div className="w-full max-h-20 flex justify-start items-center">
          <span className="font-pretendard font-light text-base text-black whitespace-nowrap overflow-hidden text-ellipsis">
            {content.info}
          </span>
        </div>
        <div className="w-full flex justify-start items-center gap-4">
          <span className="font-pretendard font-medium text-xs text-gray-300">
            {timeConverter(content.deadline)}
          </span>
        </div>
      </div>
      <div className="w-1/4 h-full flex flex-col justify-center items-center gap-4 ">
        <div className="w-full flex justify-start items-center gap-3">
          <span className="font-pretendard font-bold text-sm text-blue-300">
            주최자
          </span>
          <span className="font-pretendard font-light text-sm text-black">
            {content.leaderName}
          </span>
        </div>
        <div className="w-full flex justify-start items-center gap-3">
          <span className="font-pretendard font-bold text-sm text-blue-300">
            모집인원
          </span>
          <div className="w-fit flex justify-center items-center gap-2">
            <span
              className={cn("font-pretendard font-light text-sm text-black", {
                "text-red-500": content.nowCount === content.maxCount,
              })}
            >
              {content.nowCount}
            </span>
            <span className="font-pretendard font-light text-sm text-black">
              /
            </span>
            <span className="font-pretendard font-light text-sm text-black">
              {content.maxCount}
            </span>
          </div>
        </div>
        <div className="w-full flex justify-start items-center gap-3">
          <span className="font-pretendard font-bold text-sm text-blue-300">
            마감일
          </span>
          <div className="w-fit flex justify-center items-center gap-2">
            <span className="font-pretendard font-light text-sm text-black">
              {dueDayCalculate(content.deadline)}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export { ProjectCard, MyProjectCard };
