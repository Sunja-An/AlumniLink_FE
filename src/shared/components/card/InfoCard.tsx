"use client";

import { T_SinglePost } from "@/entity/info/post";
import { useRouter } from "next/navigation";
import React from "react";

function InfoCard({ content }: { content: T_SinglePost }) {
  const router = useRouter();

  const onClickInfoCard = () => {
    router.push(`/info/${content.id}`);
  };

  return (
    <div
      className="px-20 py-10 w-full h-96 flex flex-col justify-start items-start rounded-2xl shadow-md cursor-pointer gap-8"
      onClick={onClickInfoCard}
    >
      <div className="w-full flex justify-start items-center">
        <span className="font-pretendard font-bold text-3xl text-black">
          {content.title}
        </span>
      </div>
      <div className="w-full flex justify-start items-center">
        <span className="font-pretendard font-bold text-xl text-black">
          {content.title}
        </span>
      </div>
    </div>
  );
}

export { InfoCard };
