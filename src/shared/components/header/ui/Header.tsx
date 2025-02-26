"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { ICON_BELL } from "@/shared/constants";
import { cn } from "@/shared/utils/stylesheet/clsx";
import { getMyInfo } from "@/shared/utils/token/getClientUserInfo";
import { LogoTypography } from "@/shared/components/animation/ui/LogoTypography";

function Header() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [projectCount, setProjectCount] = useState<number>(0);

  const userData = getMyInfo();

  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 px-40 py-4 w-full min-h-14 flex justify-between items-center duration-300 z-10",
        {
          "bg-[#FFFAFA] h-14 shadow-lg": isScrolled,
          "bg-transparent h-16": !isScrolled,
        }
      )}
    >
      <div className="w-1/2 h-full flex justify-start items-center">
        <Link
          href={"/"}
          className="relative w-1/4 h-full flex justify-center items-center"
        >
          <LogoTypography width="10vw" height="5vw" />
        </Link>
      </div>
      <nav className="w-1/2 flex justify-center items-center gap-2">
        <ul className="w-1/2 flex justify-center items-center gap-2">
          <Link
            href={"/project?page=0&size=20"}
            className="min-w-20 px-2 py-3 font-pretendard font-light text-sm text-black rounded-md hover:bg-slate-100 duration-300 text-center"
          >
            프로젝트 찾기
          </Link>
          <Link
            href={"/info?page=0&size=10"}
            className="min-w-20 px-2 py-3 font-pretendard font-light text-sm text-black rounded-md hover:bg-slate-100 duration-300 text-center"
          >
            정보 둘러보기
          </Link>
        </ul>
        <div className="w-1/2 flex justify-center items-center gap-2">
          {userData ? (
            <div className="w-10 h-10 rounded-full bg-black cursor-pointer" />
          ) : (
            <>
              <Link
                href={"/login"}
                className="min-w-14 px-2 py-3 font-pretendard font-light text-sm text-black rounded-md hover:bg-slate-100 duration-300 text-center"
              >
                로그인
              </Link>
              <Link
                href={"/signup"}
                className="min-w-16 px-2 py-3 font-pretendard font-light text-sm text-black rounded-md hover:bg-slate-100 duration-300 text-center"
              >
                회원가입
              </Link>
            </>
          )}
        </div>
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
      </nav>
    </header>
  );
}

export { Header };
