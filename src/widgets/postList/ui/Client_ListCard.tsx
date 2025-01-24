"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

import { format } from "timeago.js";

import Icon from "/public/svg/graduate.svg";

type T_ListCard = {
  id: number;
  nickname: string;
  title: string;
  body: string;
  isModified: string;
};

function Client_ListCard({
  id,
  body,
  nickname,
  title,
  isModified,
}: T_ListCard) {
  const modifiedDate = new Date(isModified);
  return (
    <Link
      href={`/post/${id}`}
      className="relative px-12 py-10 w-full h-52 flex flex-col justify-start items-start gap-8 border rounded-lg shadow-md hover:scale-105 duration-300"
    >
      <div className="w-full h-1/3 flex justify-start items-center gap-8">
        <div className="w-12 h-12 flex justify-center items-center rounded-full bg-white shadow-md">
          <Image
            src={Icon}
            alt="Icon"
            width={32}
            height={32}
            className="rounded-full object-cover"
          />
        </div>
        <span className="font-studioSans font-semibold text-xl text-black">
          {title}
        </span>
      </div>
      <div className="w-full h-2/3 flex justify-start items-start">
        <span className="font-studioSans font-base text-base text-black">
          {body}
        </span>
      </div>
      <span className="absolute top-5 right-8 font-studioSans font-base text-sm text-black">
        {format(modifiedDate)}
      </span>
    </Link>
  );
}

export { Client_ListCard };
