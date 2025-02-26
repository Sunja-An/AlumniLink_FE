"use client";

import React from "react";

import Image from "next/image";
import { ICON_ARROW } from "@/shared/constants";
import { useRouter } from "next/navigation";

type ListBtnType = {
  path: "info" | "project";
};

function ListBtn({ path }: ListBtnType) {
  const router = useRouter();

  const onClickRouting = () => {
    router.push(`/${path}?page=0&size=10`);
  };

  return (
    <button
      className="px-5 py-3 flex justify-center items-center gap-2 rounded-md hover:bg-slate-200 duration-300 group"
      onClick={onClickRouting}
    >
      <Image
        src={ICON_ARROW}
        alt="arrow"
        className="rotate-180 group-hover:-translate-x-1 duration-300"
      />
      <span className="font-pretendard font-bold text-sm text-black">
        목록으로 돌아가기
      </span>
    </button>
  );
}

export { ListBtn };
