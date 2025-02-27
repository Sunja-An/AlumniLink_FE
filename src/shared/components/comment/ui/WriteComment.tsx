"use client";

import React, { type ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";

import { postComment } from "@/shared/action/comment/comment.action";

function WriteComment({ postId }: { postId: number }) {
  const router = useRouter();

  const [body, setBody] = useState<string>("");
  const [err, setErrMsg] = useState<string>("");

  const onSubmitComment = async () => {
    const res = await postComment({ postId, body });
    if (res) {
      router.refresh();
    } else {
      setErrMsg("댓글이 등록되지 않았습니다.");
    }
  };

  const onChangeTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    setBody(value);
  };

  return (
    <form
      className="w-full flex flex-col justify-start items-start gap-4"
      onSubmit={onSubmitComment}
    >
      <div className="w-full flex justify-start itmes-start gap-4">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#ee9ca7] to-[#ffdde1] shadow-md" />
        <textarea
          name="body"
          id="body"
          rows={3}
          placeholder="댓글을 입력해주세요."
          onChange={onChangeTextArea}
          className="px-6 py-4 w-full rounded-2xl font-pretendard text-sm border-2 border-black"
        />
      </div>
      <div className="w-full flex justify-end items-center gap-8">
        <span className="font-pretendard font-normal text-xs text-red-300">
          {err}
        </span>
        <button
          type="button"
          className="w-24 h-10 rounded-full font-pretendard text-sm font-black bg-slate-50"
        >
          cancel
        </button>
        <button
          type="submit"
          className="w-24 h-10 rounded-full font-pretendard text-sm font-black bg-slate-100 hover:bg-slate-200 duration-300"
        >
          submit
        </button>
      </div>
    </form>
  );
}

export { WriteComment };
