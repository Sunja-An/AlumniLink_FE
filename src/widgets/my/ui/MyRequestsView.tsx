"use client";

import { SingleRequestInfoType } from "@/entity";
import React from "react";

type MyRequestsViewType = {
  requestInfos: SingleRequestInfoType[];
};

function MyRequestsView({ requestInfos }: MyRequestsViewType) {
  if (requestInfos.length === 0) {
    return (
      <div className="w-full flex justify-center items-center ">
        <span className="font-pretendard font-bold text-2xl text-black">
          받은 요청이 없습니다. 🥲
        </span>
      </div>
    );
  }
  return <div></div>;
}

export { MyRequestsView };
