"use client";

import React from "react";

import type { ServerPostPagingObject, SinglePostType } from "@/entity";

import { MyInfoCard } from "@/shared";

type MyPostViewType = {
  postInfos: ServerPostPagingObject;
};

function MyPostView({ postInfos }: MyPostViewType) {
  if (postInfos.totalElements === 0) {
    return (
      <div className="w-full flex justify-center items-center ">
        <span className="font-pretendard font-bold text-2xl text-black">
          작성한 글이 없습니다 😭
        </span>
      </div>
    );
  }
  return (
    <div className="w-full flex flex-col justify-start items-start gap-4">
      {postInfos &&
        postInfos.content.map((item: SinglePostType, key: number) => {
          return <MyInfoCard content={item} key={key} />;
        })}
    </div>
  );
}

export { MyPostView };
