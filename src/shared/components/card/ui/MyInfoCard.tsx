"use client";

import React from "react";
import { T_SinglePost } from "@/entity/info/post";

function MyInfoCard({ content }: { content: T_SinglePost }) {
  return (
    <div className="p-10 min-w-60 min-h-60 w-72 h-72 flex flex-col justify-start items-start rounded-lg border-2 border-black shadow-lg">
      <span className="font-pretendard font-bold text-xl text-black">
        {content.title}
      </span>
      <div className="w-full flex justify-start items-center">
        <span className="font-pretendard text-lg text-black">
          {content.body}
        </span>
      </div>
    </div>
  );
}

export { MyInfoCard };
