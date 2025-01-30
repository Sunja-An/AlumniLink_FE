"use client";

import React, { useEffect } from "react";

import {
  type ServerProjectPagingObject,
  type T_SingleProject,
} from "@/entity/project/project";
import { EditBtn, get_my_info, ProjectCard, Pagination } from "@/shared";

import gsap from "gsap";

function ClientProjectList({
  data,
}: {
  data: ServerProjectPagingObject | undefined | false;
}) {
  const userData = get_my_info();
  const tl = gsap.timeline();

  useEffect(() => {
    tl.fromTo(
      ".info-card",
      {
        y: 200,
        opacity: 0,
      },
      {
        y: 0,
        duration: 1,
        opacity: 1,
        ease: "power4.Out",
        stagger: 0.1,
      }
    );
  }, [tl]);

  if (data === undefined || data === false) {
    return (
      <div className="w-full flex flex-col justify-start items-center">
        <span className="font-pretendard font-bold text-5xl text-black">
          😭 데이터가 불러와지지 않았습니다.
        </span>
      </div>
    );
  } else if (data.totalElements === 0) {
    return (
      <div className="w-full flex flex-col justify-start items-center">
        <div className="w-full flex justify-between items-center">
          <span className="font-pretendard font-bold text-sm text-black">
            검색결과 - {data.totalElements}건
          </span>
          <div className="w-1/3 min-w-40 min-h-20 flex justify-end items-center">
            <EditBtn />
          </div>
        </div>
        <span className="font-pretendard font-bold text-5xl text-black">
          데이터가 없습니다.
        </span>
      </div>
    );
  } else {
    return (
      <div className="w-full flex flex-col justify-start items-center gap-4">
        <div className="w-full flex justify-between items-center gap-4">
          <span className="font-pretendard font-light text-sm text-gray-400">
            검색결과 - {data.totalElements}건
          </span>
          <div className="w-1/3 min-w-60 flex justify-end items-center gap-4">
            {userData && <EditBtn />}
            <Pagination
              size={data.size}
              index={data.number + 1}
              totalPages={data.totalPages}
              type="info"
            />
          </div>
        </div>
        {data.content.map((item: T_SingleProject, key: number) => {
          return <ProjectCard content={item} key={key} className="info-card" />;
        })}
      </div>
    );
  }
}

export default ClientProjectList;
