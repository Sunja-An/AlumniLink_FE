import React from "react";

function SearchBar() {
  return (
    <div className="w-full px-5 py-2 flex justify-center items-center">
      <input
        type="text"
        placeholder="검색어를 입력해주세요."
        className="px-5 py-2 w-full rounded-lg"
      />
    </div>
  );
}

export { SearchBar };
