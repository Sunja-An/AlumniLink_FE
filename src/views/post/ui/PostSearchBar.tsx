"use client";

import { SearchBar } from "@/shared/components";
import React, { KeyboardEvent, useState } from "react";

function PostSearchBar() {
  const [searchTarget, setSearchTarget] = useState<string>("");

  const onSearchUniversity = () => {};

  const onPressKeyboard = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onSearchUniversity();
    }
  };
  return (
    <div className="w-full flex flex-col justify-center items-center gap-4">
      <SearchBar />
      <div className="w-full flex flex-end items-center gap-4"></div>
    </div>
  );
}

export { PostSearchBar };
