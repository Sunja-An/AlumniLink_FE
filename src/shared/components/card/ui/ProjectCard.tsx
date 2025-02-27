"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import type { SingleProjectType } from "@/entity";
import { ICON_USER, timeConverter } from "@/shared";

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
      <div className="w-1/4 h-full flex flex-col justify-center items-end gap-4">
        <Image
          src={ICON_USER}
          alt="user_icon"
          width={60}
          height={60}
          className="p-2 rounded-full border border-black"
        />
        <div className="w-full flex justify-center items-center">
          <span className="font-pretendard font-light text-sm text-black">
            {content.leaderName}
          </span>
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
      <div className="w-1/4 h-full flex flex-col justify-center items-end gap-4">
        <Image
          src={ICON_USER}
          alt="user_icon"
          width={60}
          height={60}
          className="p-2 rounded-full border border-black"
        />
        <div className="w-full flex justify-center items-center">
          <span className="font-pretendard font-light text-sm text-black">
            {content.leaderName}
          </span>
        </div>
      </div>
    </Link>
  );
}

export { ProjectCard, MyProjectCard };
