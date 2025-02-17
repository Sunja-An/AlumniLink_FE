"use client";

import React from "react";
import { type SingleCommentType } from "../types/comment";
import { timeChanger } from "@/shared/utils/changeTime";
import { get_my_info } from "@/shared/utils/get_info";

function Comment({ id, author, body, createdAt }: SingleCommentType) {
  const userData = get_my_info();
  return (
    <div
      className="relative p-5 w-full flex flex-col justify-start items-start gap-4 rounded-xl bg-white"
      key={id}
    >
      <div className="w-full flex justify-start items-center gap-2">
        <div className="w-4 h-4 rounded-full bg-gradient-to-br from-[#ee9ca7] to-[#ffdde1] shadow-md" />
        <span className="font-pretendard font-bold text-sm text-black">
          {author}
        </span>
        <span className="font-pretendard font-normal text-xs text-gray-300">
          {timeChanger(createdAt)}
        </span>
      </div>
      <div className="w-full flex justify-start items-center">
        <span className="font-pretendard font-normal text-sm text-black">
          {body}
        </span>
      </div>
      {userData && (
        <div className="absolute top-5 right-5 flex justify-center items-center gap-4">
          <button
            type="button"
            className="w-14 h-8 rounded-full flex justify-center items-center font-pretendard text-xs text-black bg-black"
          >
            수정
          </button>
          <button
            type="button"
            className="w-14 h-8 rounded-full flex justify-center items-center font-pretendard text-xs text-black"
          >
            삭제
          </button>
        </div>
      )}
    </div>
  );
}

export { Comment };
