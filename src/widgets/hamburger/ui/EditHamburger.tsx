"use client";

import React, { useState } from "react";

type T_EditHamburger = {
  onSubmitPost: () => void;
};

function EditHamburger({ onSubmitPost }: T_EditHamburger) {
  const [postType, setPostType] = useState<1 | 2 | 3>(1);

  return (
    <div className="sticky top-32 shrink-0 px-8 py-8 min-w-80 min-h-96 flex flex-col justify-start items-start gap-4 rounded-xl shadow-lg ">
      <p className="font-bold font-studioSans text-center text-xl text-black">
        게시판 설정
      </p>
      <div className="w-full flex flex-wrap justify-start items-center">
        <button
          type="button"
          className={`shrink-0 min-w-16 min-h-16 flex justify-center items-center rounded-lg duration-300 hover:scale-105 ${
            postType === 1 ? "bg-blue-200 shadow-lg" : "bg-inherit"
          }`}
          onClick={() => setPostType(1)}
        >
          자유
        </button>
        <button
          type="button"
          className={`shrink-0 min-w-16 min-h-16 flex justify-center items-center rounded-lg duration-300 hover:scale-105 ${
            postType === 2 ? "bg-blue-200 shadow-lg" : "bg-inherit"
          }`}
          onClick={() => setPostType(2)}
        >
          질문
        </button>
        <button
          type="button"
          className={`shrink-0 min-w-16 min-h-16 flex justify-center items-center rounded-lg duration-300 hover:scale-105 ${
            postType === 3 ? "bg-blue-200 shadow-lg" : "bg-inherit"
          }`}
          onClick={() => setPostType(3)}
        >
          정보
        </button>
      </div>
      <div className="w-full flex flex-col justify-center items-center gap-4">
        <button
          type="button"
          className="w-full h-12 rounded-lg shadow-lg duration-300 hover:scale-105"
          onClick={onSubmitPost}
        >
          새 글 등록
        </button>
        <button
          type="button"
          className="w-full h-12 rounded-lg shadow-lg duration-300 hover:scale-105"
        >
          임시 저장
        </button>
      </div>
    </div>
  );
}

export { EditHamburger };
