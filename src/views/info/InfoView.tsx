import React from "react";

export default function InfoView() {
  return (
    <div className="px-40 w-full h-full flex flex-col justify-start items-start gap-8">
      <div className="w-full flex justify-between items-center">
        <span className="font-pretendard font-bold text-2xl text-black">
          정보 찾기
        </span>
        <div className="w-fit flex justify-center items-center gap-2">
          <span className="font-pretendard font-light text-sm text-gray-600">
            최신 순
          </span>
          <span className="font-pretendard font-light text-sm text-gray-600">
            조회 순
          </span>
        </div>
      </div>
      <div className="w-full flex flex-col justify-start items-start"></div>
    </div>
  );
}
