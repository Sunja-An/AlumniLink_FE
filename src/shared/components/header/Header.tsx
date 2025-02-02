"use client";

import { ICON_GITHUB, ICON_INSTAGRAM } from "@/shared/constants";
import Image from "next/image";
import React from "react";

function Header() {
  return (
    <div className="px-40 w-full h-16 min-h-16 flex justify-between items-center bg-secondary">
      <div className="w-2/3 h-full flex justify-center items-center">
        <div className="px-10 w-3/4 h-3/4">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="검색어를 입력해주세요."
            className="px-10 py-4 w-full h-full rounded-full focus:outline-none"
          />
        </div>
      </div>
      <div className="w-1/3 h-full flex justify-end items-center gap-4">
        <Image src={ICON_GITHUB} alt="github" width={28} height={28} />
        <Image src={ICON_INSTAGRAM} alt="instagram" width={28} height={28} />
      </div>
    </div>
  );
}

export { Header };
