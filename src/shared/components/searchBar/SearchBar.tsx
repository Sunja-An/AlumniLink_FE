"use client";

import React from "react";

type SearchBarType = {
  name?: string;
  placeholder?: string;
};

function SearchBar({ name, placeholder }: SearchBarType) {
  if (typeof window === undefined) {
    return (
      <div className="w-full flex justify-center items-center">
        <div className="px-10 py-2 w-full h-14 rounded-lg bg-slate-400" />
      </div>
    );
  }
  return (
    <div className="w-full flex justify-center items-center">
      <input
        type="text"
        name={name ?? "searchbar"}
        placeholder={placeholder ?? "검색어를 입력해주세요."}
        className="px-10 py-2 w-full h-14 rounded-lg font-pretendard font-base text-base text-black"
      />
    </div>
  );
}

export { SearchBar };
