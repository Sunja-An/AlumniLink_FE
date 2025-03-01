"use client";

import React, { type ChangeEvent } from "react";
import Image from "next/image";

import { ICON_GITHUB } from "@/shared/constants";

type LinkEditorType = {
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
};

function LinkEditor({ onChange, value }: LinkEditorType) {
  return (
    <div className="relative w-full min-h-12 flex justify-start items-center gap-2">
      <Image
        src={ICON_GITHUB}
        alt="github"
        width={28}
        height={28}
        className="absolute left-7 top-1/2 rounded-full border-2 border-gray-400 -translate-x-1/2 -translate-y-1/2"
      />
      <textarea
        rows={1}
        name="link"
        value={value}
        onChange={onChange}
        placeholder="Github 링크를 입력해주세요."
        className="pl-14 py-4 min-w-40 w-full min-h-8 font-pretendard font-semibold text-sm text-black border rounded-md"
      />
    </div>
  );
}

export { LinkEditor };
