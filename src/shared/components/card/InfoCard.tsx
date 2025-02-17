"use client";

import React from "react";

import { T_SinglePost } from "@/entity/info/post";
import { ICON_RESUME, ICON_INFORMATION } from "@/shared/constants";
import Image from "next/image";

type T_InfoCard = {
  content: T_SinglePost;
  className?: string;
  onClick: () => void;
};

function InfoCard({ content, className, onClick }: T_InfoCard) {
  return (
    <div
      className={`px-20 py-10 w-full min-h-40 flex flex-col justify-start items-start rounded-2xl shadow-md cursor-pointer bg-secondary gap-4 ${
        className ?? ""
      }`}
      onClick={onClick}
    >
      <div className="w-full flex justify-start items-center gap-2">
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
      <div className="w-full flex justify-start items-center">
        <span className="font-pretendard font-bold text-3xl text-black">
          {content.title}
        </span>
      </div>
      <div className="w-full flex justify-start items-center">
        <span className="font-pretendard font-medium text-lg text-black">
          {content.description}
        </span>
      </div>
    </div>
  );
}

export { InfoCard };
