"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import { ICON_RESUME, ICON_INFORMATION } from "@/shared/constants";
import { SinglePostType } from "@/entity/info/post";
import { timeConverter } from "@/shared/utils";
import { ModifyBtn, MyProjectDeleteBtn } from "../../button";

type InfoCardType = {
  content: SinglePostType;
};

function InfoCard({ content }: InfoCardType) {
  return (
    <Link
      href={`/info/${content.id}?page=0&size=5`}
      className="px-12 py-5 w-full min-h-32 max-h-40 flex flex-col justify-start items-start rounded-xl cursor-pointer gap-4 hover:bg-slate-100 duration-300"
    >
      <div className="w-full flex justify-start items-center">
        <span className="font-pretendard font-bold text-xl text-black">
          {content.title}
        </span>
      </div>
      <div className="w-full flex justify-start items-center">
        <span className="font-pretendard font-medium text-base text-black whitespace-nowrap overflow-hidden text-ellipsis">
          {content.description}
        </span>
      </div>
      <div className="w-full flex justify-start items-center gap-2">
        <span className="font-pretendard font-medium text-xs text-gray-300">
          {timeConverter(content.modifiedTime)}
        </span>
        <Image
          src={content.tag === "TIP" ? ICON_INFORMATION : ICON_RESUME}
          alt="icon"
          width={20}
          height={20}
        />
        <span className="uppercase font-pretendard font-semibold text-sm text-black">
          {content.tag}
        </span>
      </div>
    </Link>
  );
}

function MyInfoCard({ content }: InfoCardType) {
  return (
    <div className="px-12 py-5 w-full min-h-32 max-h-40 flex justify-start items-start rounded-xl cursor-pointer gap-4 hover:bg-slate-100 duration-300">
      <div className="w-3/4 flex flex-col justify-start items-start gap-4">
        <div className="w-full flex justify-start items-center">
          <span className="font-pretendard font-bold text-xl text-black">
            {content.title}
          </span>
        </div>
        <div className="w-full flex justify-start items-center">
          <span className="font-pretendard font-medium text-base text-black whitespace-nowrap overflow-hidden text-ellipsis">
            {content.description}
          </span>
        </div>
        <div className="w-full flex justify-start items-center gap-2">
          <span className="font-pretendard font-medium text-xs text-gray-300">
            {timeConverter(content.modifiedTime)}
          </span>
          <Image
            src={content.tag === "TIP" ? ICON_INFORMATION : ICON_RESUME}
            alt="icon"
            width={20}
            height={20}
          />
          <span className="uppercase font-pretendard font-semibold text-sm text-black">
            {content.tag}
          </span>
        </div>
      </div>
      <div className="w-1/4 h-full flex flex-col justify-center items-end gap-2">
        <ModifyBtn url={`/edit/${content.id}`} />
        <MyProjectDeleteBtn id={content.id} />
      </div>
    </div>
  );
}

export { InfoCard, MyInfoCard };
