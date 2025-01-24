"use client";

import Link from "next/link";
import React from "react";

type T_PostCard = {
  id: number;
  title: string;
  content: string;
};

function PostCard({ id, title, content }: T_PostCard) {
  return (
    <Link href={`/post/${id}`}>
      <div className="px-10 py-5 w-80 h-96 bg-slate-50 flex flex-col justify-start items-center rounded-2xl shadow-lg duration-300 hover:scale-105">
        <div className="w-full flex flex-col justify-start items-center divide-y gap-4">
          <span className="font-studioSans font-bold text-xl text-black">
            {title}
          </span>
          <div className="py-4 w-full flex justify-start items-start">
            <span className="font-studioSans font-base text-base text-black">
              {content}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export { PostCard };
