"use client";

import React from "react";

function RequestBtn() {
  return (
    <button
      type="button"
      className="py-4 w-full h-12 rounded-md bg-blue-300 hover:bg-blue-400 duration-300 flex justify-center items-center"
    >
      <span className="font-pretendard font-bold text-base text-white">
        신청하기
      </span>
    </button>
  );
}

export { RequestBtn };
