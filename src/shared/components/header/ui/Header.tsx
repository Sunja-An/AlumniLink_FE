"use client";

import React, { useState } from "react";
import Link from "next/link";

// Shared Layer
import { cn } from "@/shared/utils/stylesheet/clsx";
import { getMyInfo } from "@/shared/utils/token/getClientUserInfo";
import { LogoTypography } from "@/shared/components/animation/ui/LogoTypography";
import { useScrollDetact } from "@/shared/hooks";
import {
  eachOpacityAnimation,
  opacityAnimation,
} from "@/shared/components/header/constants";

// Another Package
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRouter } from "next/navigation";
import { LogoutAPI } from "@/shared/action";

function Header() {
  const router = useRouter();

  // Detacting Scroll Action
  const isScrolled = useScrollDetact();

  // User Login Checked
  const userData = getMyInfo();

  const [isProfileClicked, setIsProfileClicked] = useState<boolean>(false);

  const { contextSafe } = useGSAP();

  const onClickProfile = contextSafe(() => {
    if (!userData) return;
    setIsProfileClicked((prev) => !prev);
    const tl = gsap.timeline();

    if (isProfileClicked) {
      tl.fromTo(
        ".list-data",
        eachOpacityAnimation.start,
        eachOpacityAnimation.end
      );
      tl.to(".list-datas", opacityAnimation.end);
    } else {
      tl.to(".list-datas", opacityAnimation.start);
      tl.fromTo(
        ".list-data",
        eachOpacityAnimation.end,
        eachOpacityAnimation.start
      );
    }
  });

  const onClickMypage = contextSafe(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".list-data",
      eachOpacityAnimation.start,
      eachOpacityAnimation.end
    );
    tl.to(".list-datas", opacityAnimation.end);
    tl.eventCallback("onComplete", () => {
      router.push("my");
    });
  });

  const onClickLogout = contextSafe(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".list-data",
      eachOpacityAnimation.start,
      eachOpacityAnimation.end
    );
    tl.to(".list-datas", opacityAnimation.end);
    tl.eventCallback("onComplete", () => {
      LogoutAPI();
      router.refresh();
    });
  });

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
            <div className="relative">
              <div
                className="relative w-10 h-10 rounded-full bg-black cursor-pointer"
                onClick={onClickProfile}
              />
              <ul className="list-datas absolute top-full right-1/2 px-4 py-2 min-w-28 w-28 max-w-28 min-h-36 h-36 max-h-36 flex flex-col justify-start items-center translate-x-1/2 gap-2 opacity-0">
                <li
                  className="list-data py-4 w-full flex justify-center items-center rounded-md bg-slate-100 hover:bg-slate-200 duration-300 cursor-pointer"
                  onClick={onClickMypage}
                >
                  <span className="font-pretendard font-bold text-xs text-black">
                    My 페이지
                  </span>
                </li>
                <li
                  className="list-data py-4 w-full flex justify-center items-center rounded-md bg-slate-100 hover:bg-slate-200 duration-300 cursor-pointer"
                  onClick={onClickLogout}
                >
                  <span className="font-pretendard font-bold text-xs text-black">
                    로그아웃
                  </span>
                </li>
              </ul>
            </div>
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
      </nav>
    </header>
  );
}

export { Header };
