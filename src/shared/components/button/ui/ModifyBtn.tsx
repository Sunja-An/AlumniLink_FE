"use client";

import Link from "next/link";
import React from "react";

function ModifyBtn({ url }: { url: string }) {
  return (
    <Link
      href={url}
      className="min-w-24 min-h-10 w-24 h-10 rounded-md flex justify-center items-center bg-green-300 hover:bg-green-400 duration-300"
    >
      <span className="font-pretendard font-semibold text-sm text-black">
        수정
      </span>
    </Link>
  );
}

export { ModifyBtn };
