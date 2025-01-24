"use client";

import { useState } from "react";

import { get_my_info } from "@/shared/utils/get_info";
import { HEADER_CONTENT } from "@/shared/constants";

function Header() {
  const userInfo = get_my_info();

  const [idx, setIdx] = useState<number>(1);

  return (
    <header className="px-6 py-20 w-full h-full flex flex-col justify-start items-center bg-transparent gap-14">
      <div className="w-full flex flex-col justify-center items-center gap-4">
        <div className="w-24 h-24 rounded-full bg-black" />
        <div className="w-full flex flex-col justify-center items-center gap-2">
          <span className="font-pretendard font-bold text-lg text-black">
            {userInfo.username}
          </span>
          <span className="font-pretendard font-light text-sm text-gray-400">
            {userInfo.email}
          </span>
        </div>
      </div>
      <nav className="w-full flex flex-col justify-center items-center">
        <ul className="px-10 w-full flex flex-col justify-start items-center gap-4">
          {HEADER_CONTENT.map((item, key: number) => {
            return (
              <li
                className={`w-full py-4 text-center font-pretendard font-bold text-lg text-black rounded-2xl duration-300 ${
                  idx === item.id
                    ? "bg-[#003366] text-white"
                    : "hover:bg-gray-50 "
                }`}
                onClick={() => setIdx(item.id)}
                key={key}
              >
                {item.content}
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

export { Header };
