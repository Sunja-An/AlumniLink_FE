"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import { ICON_GITHUB } from "@/shared/constants";

function GithubBookMarkCard({ githubLink }: { githubLink: string }) {
  return (
    <Link
      href={githubLink}
      className="px-5 py-2 min-w-60 w-full min-h-20 h-20 flex justify-center items-center rounded-md bg-softwhite hover:bg-slate-200 duration-300 gap-4 group"
    >
      <Image
        src={ICON_GITHUB}
        alt="github-icon"
        width={32}
        height={32}
        className="border rounded-full"
      />
      <div className="w-3/4 h-1/2 flex justify-start items-center">
        <span className="font-pretendard font-semibold text-sm text-gray-600">
          {githubLink}
        </span>
      </div>
    </Link>
  );
}

export { GithubBookMarkCard };
