"use client";

import React, { type MouseEvent } from "react";

import { useRouter } from "next/navigation";

import { deleteMyInfo, deleteProject } from "@/shared/action";

function MyInfoDeleteBtn({ id }: { id: number }) {
  const router = useRouter();
  const onClickMyDelete = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const res = await deleteMyInfo(id);
    console.log(res);
    if (res) {
      alert("삭제되었습니다.");
      router.refresh();
    } else {
      alert("삭제가 안되었습니다.");
    }
  };
  return (
    <button
      type="button"
      className="min-w-20 min-h-8 w-20 h-8 rounded-md flex justify-center items-center bg-red-300 hover:bg-red-400 duration-300 z-10"
      onClick={(e) => onClickMyDelete(e)}
    >
      <span className="font-pretendard font-semibold text-sm text-black">
        삭제
      </span>
    </button>
  );
}

function MyProjectDeleteBtn({ id }: { id: number }) {
  const router = useRouter();
  const onClickMyDelete = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const res = await deleteProject(id);
    if (res) {
      router.refresh();
    } else {
    }
  };
  return (
    <button
      type="button"
      className="min-w-20 min-h-8 w-20 h-8 rounded-md flex justify-center items-center bg-red-300 hover:bg-red-400 duration-300 z-10"
      onClick={onClickMyDelete}
    >
      <span className="font-pretendard font-semibold text-sm text-black">
        삭제
      </span>
    </button>
  );
}

export { MyProjectDeleteBtn, MyInfoDeleteBtn };
