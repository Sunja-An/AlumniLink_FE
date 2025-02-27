"use client";

import React from "react";
import Link from "next/link";

import { TAG } from "@/entity";

function PostTypeCard({ tag }: { tag: TAG }) {
  if (tag === "TIP") {
    return (
      <Link
        href={"/edit/tip"}
        className="px-7 py-5 w-full max-h-32 flex flex-col justify-start items-start gap-4 bg-white"
      >
        <div className="w-full flex justify-start items-center">
          <span className="font-pretendard font-bold text-lg text-black">
            TIP
          </span>
        </div>
        <div className=""></div>
      </Link>
    );
  } else if (tag === "QUESTION") {
    return (
      <Link
        href={"/edit/question"}
        className="px-7 py-5 w-full max-h-32 flex flex-col justify-start items-start gap-4 bg-white"
      >
        <div className="w-full flex justify-start items-center">
          <span className="font-pretendard font-bold text-lg text-black">
            QUESTION
          </span>
        </div>
        <div className=""></div>
      </Link>
    );
  } else {
    return (
      <Link
        href={"/edit/project"}
        className="px-7 py-5 w-full max-h-32 flex flex-col justify-start items-start gap-4 bg-white"
      >
        <div className="w-full flex justify-start items-center">
          <span className="font-pretendard font-bold text-lg text-black">
            PROJECT
          </span>
        </div>
        <div className=""></div>
      </Link>
    );
  }
}

export { PostTypeCard };
