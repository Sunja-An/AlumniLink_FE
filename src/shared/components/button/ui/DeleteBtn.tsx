"use client";

import AlumniLinkAPI from "@/shared/config/AxiosConfig";
import React, { type FormEvent } from "react";

function MyProjectDeleteBtn({ id }: { id: number }) {
  const onClickMyDelete = async (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const res = await deleteMyProject({ id });
    if (res) {
    } else {
    }
  };
  return (
    <button
      type="button"
      className="min-w-24 min-h-10 w-24 h-10 rounded-md flex justify-center items-center bg-red-300 hover:bg-red-400 duration-300"
      onChange={(e) => onClickMyDelete(e)}
    >
      <span className="font-pretendard font-semibold text-sm text-black">
        삭제
      </span>
    </button>
  );
}

export const deleteMyProject = async ({ id }: { id: number }) => {
  try {
    const res = await AlumniLinkAPI.delete(`/projects/my/${id}`);
    return res.data;
  } catch (err) {
    return err;
  }
};

export { MyProjectDeleteBtn };
