"use client";

import { QueryStringSortType } from "@/shared/types";
import { cn } from "@/shared/utils";
import { useRouter } from "next/navigation";

type T_Pagination = {
  type: "info" | "project" | "comment";
  id?: string;
  totalPages: number;
  index: number;
  size: number;
  sort: QueryStringSortType;
};

function Pagination({ type, id, index, totalPages, size, sort }: T_Pagination) {
  const router = useRouter();
  const onClickPrev = () => {
    if (index - 1 > 0) {
      if (type === "comment") {
        router.push(`/info/${id}?page=${index - 1}&size=${size}&sort=${sort}`);
      } else {
        router.push(`/${type}?page=${index - 1}&size=${size}&sort=${sort}`);
      }
    }
  };

  const onClickNext = () => {
    if (index < totalPages) {
      if (type === "comment") {
        router.push(`/info/${id}?page=${index + 1}&size=${size}&sort=${sort}`);
      } else {
        router.push(`/${type}?page=${index + 1}&size=${size}&sort=${sort}`);
      }
    }
  };

  const onClickPage = (page: number) => {
    if (type === "comment") {
      router.push(`/info/${id}?page=${page}&size=${size}&sort=${sort}`);
    } else {
      router.push(`/${type}?page=${page}&size=${size}&sort=${sort}`);
    }
  };

  return (
    <div className="min-w-40 w-40 min-h-12 h-12 flex justify-center items-center gap-6">
      <button
        type="button"
        onClick={onClickPrev}
        className={`${index - 1 <= 0 && "cursor-not-allowed text-gray-400"}`}
      >
        {"<"}
      </button>
      <div className="w-fit flex justify-center items-center gap-4">
        {Array.from({ length: totalPages }).map((_, key: number) => {
          return (
            <span
              className={cn(
                "font-pretendard font-bold text-xs text-gray-300 hover:text-gray-500 duration-300 cursor-pointer",
                {
                  "text-black": index === key + 1,
                }
              )}
              onClick={() => onClickPage(key)}
              key={key}
            >
              {key + 1}
            </span>
          );
        })}
      </div>
      <button
        type="button"
        onClick={onClickNext}
        className={`${
          index === totalPages && "cursor-not-allowed text-gray-400"
        }`}
      >
        {">"}
      </button>
    </div>
  );
}

export { Pagination };
