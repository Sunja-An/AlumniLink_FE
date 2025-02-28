"use client";

import { postProjectRequest } from "@/shared/action";
import { cn } from "@/shared/utils";
import React, { MouseEvent } from "react";

type RequestBtnType = {
  id: string;
  isExpired: boolean;
};

function RequestBtn({ id, isExpired }: RequestBtnType) {
  const onClickRequest = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const res = await postProjectRequest(id);
    if (res) {
      alert("신청완료되었습니다.");
    } else {
    }
  };
  return (
    <button
      type="button"
      className={cn(
        "py-4 w-full rounded-lg bg-blue-300 duration-300 font-pretendard font-bold text-base text-white",
        {
          "cursor-not-allowed": isExpired,
          "hover:bg-blue-400 ": !isExpired,
        }
      )}
      onClick={onClickRequest}
    >
      신청하기
    </button>
  );
}

export { RequestBtn };
