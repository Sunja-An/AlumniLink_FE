"use client";

import { cn } from "@/shared/utils";
import { useRouter } from "next/navigation";

type T_Pagination = {
  type: "info" | "project";
  totalPages: number;
  index: number;
  size: number;
};

function Pagination({ type, index, totalPages, size }: T_Pagination) {
  const router = useRouter();
  const onClickPrev = () => {
    if (index - 1 > 0) {
      router.push(`/${type}?page=${index - 1}&size=${size}`);
    }
  };

  const onClickNext = () => {
    if (index < totalPages) {
      router.push(`/${type}?page=${index + 1}&size=${size}`);
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
                "font-pretendard font-bold text-xs text-gray-300 hover:text-gray-500 duration-300",
                {
                  "text-black": index === key + 1,
                }
              )}
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
