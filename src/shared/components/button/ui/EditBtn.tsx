"use client";

import { useRouter } from "next/navigation";
import React from "react";

function EditBtn() {
  const router = useRouter();

  const onClickMove = () => {
    router.push("/edit");
  };

  return (
    <button
      type="button"
      className="w-28 min-w-28 h-12 rounded-full bg-slate-50 shadow-lg"
      onClick={onClickMove}
    >
      <span className="font-pretendard font-semibold text-sm text-black">
        새 글 작성
      </span>
    </button>
  );
}

export { EditBtn };
