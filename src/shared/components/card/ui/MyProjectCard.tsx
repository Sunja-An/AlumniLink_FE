"use client";

import { T_SingleProject } from "@/entity/project/project";
import React from "react";

function MyProjectCard({ content }: { content: T_SingleProject }) {
  return (
    <div className="relative p-7 min-w-40 min-h-60 w-52 h-64 flex flex-col justify-start items-start">
      <div className="">
        <span className="font-pretendard font-semibold text-sm text-black">
          {content.name}
        </span>
      </div>
      <div className=""></div>
      <div className=""></div>
    </div>
  );
}

export { MyProjectCard };
