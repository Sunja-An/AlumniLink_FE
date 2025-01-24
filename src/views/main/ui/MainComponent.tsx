"use client";

import Image from "next/image";
import React from "react";

import Logo from "/public/logo/logo.png";
import { PostCard } from "@/shared/components/ui/card/PostCard";

import GithubImg from "/public/sns/github-mark.svg";
import InstaImg from "/public/sns/insta.svg";

function MainComponent() {
  return (
    <div className="w-full h-full flex justify-start items-start">
      <div className="w-2/3 h-full flex flex-col justify-start items-center gap-4">
        <span className="font-studioSans font-bold text-5xl text-black">
          졸업생들의 생생한 후기
        </span>
        <span className="font-studioSans font-semibold text-4xl text-black">
          조언과 팁들을 받아보세요
        </span>
        <PostCard id={1} title={"test on this card"} content="text" />
      </div>
      <div className="w-1/3 flex flex-col justify-center items-center gap-8">
        <Image
          src={Logo}
          alt="Logo"
          width={300}
          height={300}
          className="rounded-full border inset-3 shadow-lg duration-300 hover:scale-105"
        />
        <div className="w-full flex justify-center items-center gap-8">
          <Image
            src={GithubImg}
            alt="github"
            width={32}
            height={32}
            className="hover:scale-110 duration-300"
          />
          <Image
            src={InstaImg}
            alt="instagram"
            width={32}
            height={32}
            className="hover:scale-110 duration-300"
          />
        </div>
      </div>
    </div>
  );
}

export { MainComponent };
