import React from "react";

type T_ViewComment = {
  content: string;
};

function ViewComment({ content }: T_ViewComment) {
  return (
    <div className="">
      <div className=""></div>
      <div className="flex flex-wrap">
        <span className="font-studioSans text-base text-black">{content}</span>
      </div>
    </div>
  );
}

export { ViewComment };
