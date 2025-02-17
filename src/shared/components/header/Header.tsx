"use client";

import { get_my_project_request } from "@/shared/action/project-request.action";
import { ICON_BELL, ICON_GITHUB, ICON_INSTAGRAM } from "@/shared/constants";
import { cn } from "@/shared/utils/clsx";
import { get_my_info } from "@/shared/utils/get_info";
import Image from "next/image";
import React, { useEffect, useState } from "react";

function Header() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [projectCount, setProjectCount] = useState<number>(0);

  const userData = get_my_info();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    const getProjectCount = async () => {
      const data = await get_my_project_request();
      setProjectCount(data.length ?? 0);
    };

    getProjectCount();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 px-40 w-full min-h-14 flex justify-between items-center duration-300 z-10",
        {
          "bg-secondary h-14 shadow-lg": isScrolled,
          "bg-transparent h-16": !isScrolled,
        }
      )}
    >
      <div className="w-2/3 h-full flex justify-center items-center">
        <div className="px-10 w-3/4 h-3/4">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="검색어를 입력해주세요."
            className="px-10 py-4 w-full h-full font-pretendard font-medium text-sm rounded-full focus:outline-none"
          />
        </div>
      </div>
      <div className="w-1/3 h-full flex justify-end items-center gap-4">
        {userData && (
          <div className="relative w-10 h-10 rounded-md flex justify-center items-center cursor-pointer">
            <Image src={ICON_BELL} alt="alarm" width={28} height={28} />
            <div className="absolute w-4 h-4 bottom-0 right-0 rounded-full flex justify-center items-center bg-gray-500">
              <span className="font-pretendard font-light text-xs text-white">
                {projectCount}
              </span>
            </div>
          </div>
        )}
        <div className="w-10 h-10 rounded-md flex justify-center items-center hover:bg-slate-200 duration-300">
          <Image src={ICON_GITHUB} alt="github" width={28} height={28} />
        </div>
        <div className="w-10 h-10 rounded-md flex justify-center items-center hover:bg-slate-200 duration-300">
          <Image src={ICON_INSTAGRAM} alt="instagram" width={28} height={28} />
        </div>
      </div>
    </header>
  );
}

export { Header };
