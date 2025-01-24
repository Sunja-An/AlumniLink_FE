"use client";

import React from "react";

function MyView() {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-16">
      {/* Profile View */}
      <div className="w-full flex flex-col justify-center items-center gap-8">
        <div className="min-w-32 min-h-32 rounded-full bg-gradient-to-l from-[#D3CCE3] to-[#E9E4F0] shadow-lg duration-300 hover:scale-105" />
        <p className="font-studioSans font-semibold text-3xl text-black">
          {"NickName"}
        </p>
        <p className="font-studioSans font-normal text-xl text-black">
          경북대학교 23학번 컴퓨터학부
        </p>
      </div>
      <div className="w-full flex justify-start items-start gap-4">
        {/* History View */}
        <div className="w-1/2 flex flex-col justify-start items-start gap-8">
          <p className="px-4 font-studioSans font-semibold text-xl text-black">
            개인 이력서
          </p>
          <div className="px-8 py-8 w-full flex flex-col justify-start items-start rounded-lg border shadow-lg"></div>
        </div>
        {/* My Written Posts */}
        <div className="w-1/2 flex flex-col justify-start items-start gap-8">
          <p className="px-4 font-studioSans font-semibold text-xl text-black">
            내가 쓴 글
          </p>
          <div className="px-8 py-8 w-full flex flex-col justify-start items-start rounded-lg border shadow-lg"></div>
        </div>
      </div>
    </div>
  );
}

export { MyView };
