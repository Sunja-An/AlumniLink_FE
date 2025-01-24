"use client";

import { Editor } from "@/shared/components";

import React, {
  type Dispatch,
  type SetStateAction,
  type ChangeEvent,
} from "react";

type T_PostEdit = {
  titleValue: string;
  onChangeTitle: (e: ChangeEvent<HTMLInputElement>) => void;
  content: string;
  onChangeStringValue: Dispatch<SetStateAction<string>>;
};

function PostEdit({
  content,
  onChangeStringValue,
  onChangeTitle,
  titleValue,
}: T_PostEdit) {
  const postEditProps = {
    type: true,
    setContent: onChangeStringValue,
  };
  return (
    <main className="w-full flex flex-col justify-start items-start gap-4">
      <div className="relative w-full flex flex-col justify-start items-start gap-4">
        <p className="font-studioSans font-bold text-3xl text-black">제목</p>
        <input
          type="text"
          className="px-5 py-3 w-full rounded-lg"
          value={titleValue}
          onChange={onChangeTitle}
        />
      </div>
      <div className="w-full h-[1px] bg-white rounded-lg" />
      <p className="font-studioSans font-semibold text-xl text-black">내용</p>
      <article className="w-full h-screen">
        <Editor {...postEditProps} />
      </article>
    </main>
  );
}

export { PostEdit };
