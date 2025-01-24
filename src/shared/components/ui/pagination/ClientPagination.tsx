"use client";

import React from "react";

import Arrow from "/public/svg/RightArrow.svg";
import Image from "next/image";

type T_Pagination = {
  currIndex: number;
  fullIndex: number;
};

function ClientPagination({ currIndex, fullIndex }: T_Pagination) {
  const onClickPrev = () => {};

  const onClickNext = () => {};

  return (
    <div className="w-full flex justify-center items-center gap-8">
      <div className="">
        <Image src={Arrow} alt="leftArrow" className="w-6 h-12" />
      </div>
      {Array.from({ length: fullIndex }).map((_, key) => {
        return (
          <div className="" key={key}>
            <span className="">{key + 1}</span>
          </div>
        );
      })}
      <div className="">
        <Image src={Arrow} alt="leftArrow" className="rotate-180 w-6 h-12" />
      </div>
    </div>
  );
}

export { ClientPagination };
