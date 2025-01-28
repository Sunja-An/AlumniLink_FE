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
    <div className="min-w-40 w-40 min-h-12 h-12 flex justify-center items-center gap-2">
      <button
        type="button"
        onClick={onClickPrev}
        className={`${index - 1 <= 0 && "cursor-not-allowed text-gray-400"}`}
      >
        {"<"}
      </button>
      <span className="font-pretendard font-semibold text-sm text-black">
        {index}
      </span>
      <span className="font-pretendard font-semibold text-sm text-black">
        of
      </span>
      <span className="font-pretendard font-semibold text-sm text-black">
        {totalPages}
      </span>
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
