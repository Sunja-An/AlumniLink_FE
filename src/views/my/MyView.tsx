"use client";

import { get_my_info } from "@/shared";
import { MyInfoList } from "@/widgets/my/ui/MyInfoList";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function MyView() {
  const userInfo = get_my_info();
  const router = useRouter();
  useEffect(() => {
    if (userInfo === false) {
      router.push("/login");
    }
  }, []);

  return (
    <div className="py-10 w-full h-full flex justify-center items-center">
      <div className="px-10 py-10 w-3/4 h-full flex flex-col justify-start items-start gap-8 rounded-xl bg-[#FFFAFA] shadow-lg">
        <div className="w-full flex flex-col justify-center items-center gap-8">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#ee9ca7] to-[#ffdde1] shadow-md" />
          <div className="w-full flex flex-col justify-start items-center gap-4">
            <span className="font-pretendard font-bold text-2xl text-black">
              {userInfo ? userInfo.nickname : "잘못된 접근입니다."}
            </span>
            <span className="font-pretendard font-bold text-lg text-gray-500">
              {userInfo ? userInfo.email : "잘못된 접근입니다."}
            </span>
          </div>
        </div>
        <div className="icon-box"></div>
        <div className="px-20 w-full flex flex-col justify-start items-start gap-4">
          <span className="font-pretendard font-bold text-2xl text-black">
            내가 쓴 글
          </span>
          <div className="">
            <MyInfoList />
          </div>
        </div>
        <div className="px-20 w-full flex flex-col justify-start items-start gap-4">
          <span className="font-pretendard font-bold text-2xl text-black">
            내가 참여한 프로젝트
          </span>
          <div className=""></div>
        </div>
      </div>
    </div>
  );
}
