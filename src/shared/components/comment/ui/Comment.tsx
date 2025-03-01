"use client";

import React from "react";
import { timeConverter } from "@/shared/utils/format/timeConverter";
import type { SingleCommentType } from "@/entity";

function Comment({ id, author, body, createdAt }: SingleCommentType) {
  return (
    <div
      className="relative p-5 w-full flex flex-col justify-start items-start gap-4 rounded-xl"
      key={id}
    >
      <div className="w-full flex justify-between items-center">
        <div className="w-5/6 flex justify-start items-center gap-3">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#ee9ca7] to-[#ffdde1] shadow-md" />
          <span className="font-pretendard font-bold text-sm text-black">
            {author}
          </span>
          <span className="font-pretendard font-normal text-xs text-gray-300">
            {timeConverter(createdAt)}
          </span>
        </div>
        <div className="w-1/6 flex justify-center items-center"></div>
      </div>
      <div className="w-full flex justify-start items-center">
        <span className="font-pretendard font-normal text-sm text-black">
          {body}
        </span>
      </div>
    </div>
  );
}

export { Comment };
