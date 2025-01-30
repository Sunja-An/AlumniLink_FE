"use client";

import React, { type ChangeEvent, useState } from "react";

import { type T_Post, TAG } from "@/entity/info/post";
import { type T_Project } from "@/entity/project/project";
import { Editor, isPostKey, isProjectKey, PostTypeCard } from "@/shared";

// Another Library
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { post_my_info, post_my_project } from "@/views/edit/api/upload.action";
import { useRouter } from "next/navigation";

export default function EditView() {
  const router = useRouter();

  // 1 : PostInfo
  // 2 : ProjectInfo
  const [sort, setSort] = useState<TAG>("TIP");

  const [postInfo, setPostInfo] = useState<T_Post>({
    title: "",
    body: "",
    description: "",
    tag: "TIP",
  });

  const [projectInfo, setProjectInfo] = useState<T_Project>({
    name: "",
    info: "",
    gitLink: "",
    maxCount: 4,
  });

  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>, tag: TAG) => {
    const { name, value } = e.target;
    if (tag === "TIP" || tag === "RESUME") {
      if (isPostKey(name)) {
        setPostInfo({
          ...postInfo,
          [name]: value,
        });
      }
    } else {
      if (isProjectKey(name)) {
        setProjectInfo({
          ...projectInfo,
          [name]: value,
        });
      }
    }
  };

  const onChangePost = (url: string) => {
    setPostInfo({
      ...postInfo,
      body: url,
    });
  };

  const onChangeProject = (url: string) => {
    setProjectInfo({
      ...projectInfo,
      info: url,
    });
  };

  const onClickInfoUpload = async () => {
    const res = await post_my_info(postInfo);
    console.log(res);
    if (res) {
      router.push("/info?page=0&size=0");
    } else {
      alert("Server error");
    }
  };

  const onClickProjectUpload = async () => {
    const res = await post_my_project(projectInfo);
    if (res) {
      router.push("/info?page=0&size=0");
    } else {
      alert("Server error");
    }
  };

  const { contextSafe } = useGSAP();

  useGSAP(() => {
    gsap.fromTo(
      ".type-card",
      {
        opacity: 0,
        y: 200,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power4.inOut",
        stagger: 0.25,
      }
    );
  }, []);

  const onClickTypeCard = contextSafe((tag: TAG) => {
    const tl = gsap.timeline();
    if (tag === "TIP") {
      tl.to([".project-card", ".resume-card"], {
        opacity: 0,
        y: 200,
        duration: 1,
        ease: "power4.inOut",
      });
      tl.to(".tip-card", {
        scaleX: 1.1,
        scaleY: 1.1,
        duration: 2,
      });
      tl.to(".tip-card", {
        opacity: 0,
        y: -200,
        duration: 1,
        ease: "power4.out",
      });
      setSort("TIP");
    } else if (tag === "PROJECT") {
      tl.to([".tip-card", ".resume-card"], {
        opacity: 0,
        y: 200,
        duration: 1,
        ease: "power4.inOut",
      });
      tl.to(".project-card", {
        scaleX: 1.1,
        scaleY: 1.1,
        duration: 2,
      });
      tl.to(".project-card", {
        opacity: 0,
        y: -200,
        duration: 1,
        ease: "power4.out",
      });
      setSort("PROJECT");
    } else if (tag === "RESUME") {
      tl.to([".project-card", ".tip-card"], {
        opacity: 0,
        y: 200,
        duration: 1,
        ease: "power4.inOut",
      });
      tl.to(".resume-card", {
        scaleX: 1.1,
        scaleY: 1.1,
        duration: 2,
      });
      tl.to(".resume-card", {
        opacity: 0,
        y: -200,
        duration: 1,
        ease: "power4.out",
      });
      setSort("RESUME");
    }
    tl.set(".type-container", {
      display: "none",
    });
    tl.set(".input-container", {
      display: "flex",
      flexDirection: "column",
    });
    tl.fromTo(
      ".input-container",
      {
        y: -200,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
      }
    );
  });

  return (
    <div className="w-full h-screen flex flex-wrap justify-center items-center">
      <div className="type-container w-3/4 h-5/6 flex flex-col justify-center items-center gap-12 bg-[#FFFAFA] rounded-lg shadow-2xl">
        <div className="title w-full flex justify-center items-center">
          <span className="font-pretendard font-bold text-4xl text-black uppercase">
            Post 타입 설정
          </span>
        </div>
        <div className="w-full flex justify-center items-center gap-8">
          <div
            className="w-fit h-fit cursor-pointer"
            onClick={() => onClickTypeCard("TIP")}
          >
            <PostTypeCard
              tag="TIP"
              className="type-card tip-card origin-center"
            />
          </div>
          <div
            className="w-fit h-fit cursor-pointer"
            onClick={() => onClickTypeCard("PROJECT")}
          >
            <PostTypeCard
              tag="PROJECT"
              className="type-card project-card origin-center"
            />
          </div>
          <div
            className="w-fit h-fit cursor-pointer"
            onClick={() => onClickTypeCard("RESUME")}
          >
            <PostTypeCard
              tag="RESUME"
              className="type-card resume-card origin-center"
            />
          </div>
        </div>
      </div>
      <div className="input-container relative hidden px-14 py-14 w-3/4 h-5/6 flex-col justify-start items-start gap-12 bg-[#FFFAFA] rounded-lg shadow-lg">
        <div className="absolute top-5 right-5 w-full flex justify-end items-center gap-8">
          <button
            className="w-32 h-12 rounded-full font-pretendard font-light text-sm text-black uppercase bg-slate-400"
            type="button"
            onClick={() => router.push("/info?page=0&size=0")}
          >
            cancel
          </button>
          <button
            className="w-32 h-12 rounded-full font-pretendard font-light text-sm text-black uppercase bg-slate-400"
            type="button"
            onClick={
              sort === "PROJECT" ? onClickProjectUpload : onClickInfoUpload
            }
          >
            upload
          </button>
        </div>
        <div className="w-full flex flex-col justify-start items-start gap-5">
          <label
            htmlFor="title"
            className="font-pretendard font-bold text-xl text-black"
          >
            제목
          </label>
          <input
            type="text"
            id="title"
            name={sort === "PROJECT" ? "name" : "title"}
            placeholder="제목을 입력해주세요"
            onChange={(e) => onChangeTitle(e, sort)}
            className="px-5 py-2 w-full h-12 rounded-lg font-pretendard font-light text-lg text-black"
          />
        </div>
        <div className="w-full max-h-60 h-60 min-h-40 flex flex-col justify-start items-start gap-5 overflow-y-hidden">
          <label
            htmlFor="title"
            className="font-pretendard font-semibold text-lg text-black"
          >
            내용
          </label>
          <Editor
            setMarkdown={sort === "PROJECT" ? onChangeProject : onChangePost}
          />
        </div>
        <div className="w-full flex flex-col justify-start items-start gap-5">
          <label
            htmlFor="description"
            className="font-pretendard font-semibold text-lg text-black"
          >
            포스팅 문구를 설정해주세요!
          </label>
          <input
            type="text"
            id="description"
            name={sort === "PROJECT" ? "gitLink" : "description"}
            placeholder={
              sort === "PROJECT"
                ? "Github 주소를 입력해주세요"
                : "문구를 입력해주세요"
            }
            onChange={(e) => onChangeTitle(e, sort)}
            className="px-10 py-2 w-full h-12 rounded-lg font-pretendard font-light text-lg text-black"
          />
        </div>
      </div>
    </div>
  );
}
