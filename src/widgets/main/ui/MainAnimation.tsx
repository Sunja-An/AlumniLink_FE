"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function TextAnimation() {
  const router = useRouter();

  useGSAP(() => {
    const tl = gsap.timeline({ delay: 0 });
    tl.fromTo(
      ".title",
      {
        opacity: 0,
        y: -20,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.4,
      }
    );
    tl.to(".title", {
      delay: 2,
      opacity: 0,
      y: -20,
    });
    tl.to("typo", {
      opacity: 0,
      y: 20,
      stagger: 0.4,
    });
    tl.eventCallback("onComplete", () => {
      router.push("info?page=0&size=10&sort=DESC");
    });
  });
  return (
    <section className="pt-20 w-full flex flex-col justify-start items-center gap-8">
      <span className="title opacity-0 font-pretendard font-extrabold text-5xl text-black">
        선배들도
      </span>
      <span className="title opacity-0 font-pretendard font-light text-3xl text-black">
        후배였을 때가 있었단다
      </span>
      <span className="title opacity-0 font-pretendard font-light text-lg text-black">
        선배들에게 정보를 얻어가는 커뮤니티
      </span>
    </section>
  );
}

export { TextAnimation };
