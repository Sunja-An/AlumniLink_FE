"use client";

import { RiveBtn } from "@/shared";
import React from "react";

function MainView() {
  return (
    <main className="w-screen h-screen flex flex-col justify-center items-center">
      <section className="w-full flex justify-center items-center">
        <RiveBtn />
      </section>
      <section className="w-full flex flex-col justify-start items-center gap-8">
        <span className="font-pretendard font-extrabold text-5xl text-black">
          선배들도
        </span>
        <span className="font-pretendard font-light text-3xl text-black">
          후배였을 때가 있었단다
        </span>
      </section>
    </main>
  );
}

export default MainView;
