"use client";

import { ICON_SEARCH } from "@/shared/constants";
import Image from "next/image";
import React, { ChangeEvent, useState } from "react";

type SearchBarType = {
  name?: string;
  placeholder?: string;
};

function SearchBar({ name, placeholder }: SearchBarType) {
  const [searchValue, setSearchValue] = useState<string>("");

  const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  return (
    <div className="relative w-full flex justify-center items-center gap-4">
      <Image
        src={ICON_SEARCH}
        alt="search_icon"
        width={20}
        height={20}
        className="absolute left-7 top-1/2 -translate-x-1/2 -translate-y-1/2"
      />
      <input
        type="text"
        name={name ?? "searchbar"}
        value={searchValue}
        onChange={onChangeText}
        placeholder={placeholder ?? "검색어를 입력해주세요."}
        className="pl-12 py-2 w-full h-14 rounded-lg font-pretendard font-base text-base text-black border-2 border-blue-300 duration-300"
      />
      <button
        type="button"
        className="min-w-20 min-h-14 w-20 h-14 text-center font-pretendard font-bold text-base text-white rounded-md bg-blue-400 hover:bg-blue-200 duration-300"
      >
        검색
      </button>
    </div>
  );
}

export { SearchBar };
