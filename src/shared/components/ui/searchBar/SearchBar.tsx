"use client";

import React, { type KeyboardEvent } from "react";
import Image from "next/image";

import SearchIcon from "/public/svg/SearchIcon.svg";

interface ISearchBar {
  value?: string;
  onKeyPress?: (event: KeyboardEvent<HTMLInputElement>) => void;
  className?: string;
}

function SearchBar({ onKeyPress }: ISearchBar) {
  return (
    <div className="w-full h-fit relative border rounded-xl">
      <Image
        src={SearchIcon}
        alt={SearchIcon}
        width={30}
        height={30}
        className="absolute left-5 top-1/4"
      />
      <input
        type="text"
        className="pl-16 w-full h-14 rounded-xl text-black"
        onKeyDown={onKeyPress}
      />
    </div>
  );
}

export { SearchBar };
