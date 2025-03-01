"use client";

import Link from "next/link";
import React from "react";

function ModifyBtn({ url }: { url: string }) {
  return (
    <Link
      href={url}
      className="min-w-20 min-h-8 w-20 h-8 rounded-md flex justify-center items-center bg-green-300 hover:bg-green-400 duration-300 z-10"
    >
      <span className="font-pretendard font-semibold text-sm text-black">
        수정
      </span>
    </Link>
  );
}

export { ModifyBtn };
