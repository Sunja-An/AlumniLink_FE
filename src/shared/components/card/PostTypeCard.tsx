"use client";

import Image from "next/image";
import React from "react";
import { type TAG } from "@/entity/info/post";

import {
  IMG_QUESTION,
  IMG_PROJECT,
  IMG_TIP,
  PostTypeCardContent,
} from "@/shared/constants";

function PostTypeCard({ tag, className }: { tag: TAG; className?: string }) {
  const imageDesignCode =
    "absolute w-full h-full object-cover rounded-md group-hover:scale-150 duration-300 ease-out";
  const ImageSelector = () => {
    if (tag === "TIP") {
      return (
        <Image src={IMG_TIP} alt="question-image" className={imageDesignCode} />
      );
    } else if (tag === "PROJECT") {
      return (
        <Image
          src={IMG_PROJECT}
          alt="question-image"
          className={imageDesignCode}
        />
      );
    } else if (tag === "RESUME") {
      return (
        <Image
          src={IMG_QUESTION}
          alt="question-image"
          className={imageDesignCode}
        />
      );
    }
  };
  return (
    <div
      className={`relative px-10 py-10 w-60 h-60 rounded-md flex flex-col justify-center items-center gap-4 ${
        className ?? ""
      } group overflow-hidden`}
    >
      {ImageSelector()}
      <span className="font-pretendard font-black text-xl text-white z-10">
        {tag}
      </span>
      <span className="font-pretendard font-light text-base text-white z-10">
        {PostTypeCardContent[tag]}
      </span>
    </div>
  );
}

export { PostTypeCard };
