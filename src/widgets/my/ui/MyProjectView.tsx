"use client";

import React from "react";

import type { ServerProjectPagingObject, SingleProjectType } from "@/entity";
import { MyProjectCard } from "@/shared";

type MyProjectViewType = {
  projectInfos: ServerProjectPagingObject;
};

function MyProjectView({ projectInfos }: MyProjectViewType) {
  if (projectInfos.totalElements === 0) {
    return (
      <div className="w-full flex justify-center items-center ">
        <span className="font-pretendard font-bold text-2xl text-black">
          개최한 프로젝트가 없습니다 😭
        </span>
      </div>
    );
  }
  return (
    <div className="w-full flex flex-col justify-start items-start gap-4">
      {projectInfos.content.map((item: SingleProjectType, key: number) => {
        return <MyProjectCard content={item} key={key} />;
      })}
    </div>
  );
}

export { MyProjectView };
