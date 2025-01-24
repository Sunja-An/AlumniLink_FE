"use client";

import React from "react";

type T_SingleTitle = {
  title: string;
};

function SingleTitleView({ title }: T_SingleTitle) {
  return (
    <div className="w-full flex justify-start items-center">
      <span className="font-studioSans font-semibold text-4xl text-black">
        {title}
      </span>
    </div>
  );
}

export { SingleTitleView };
