import type { TAG } from "@/entity";

function Tag({ content }: { content: TAG }) {
  return (
    <div className="px-5 py-2 w-fit h-8 rounded-full bg-gray-400 hover:bg-gray-600 duration-300 flex justify-center items-center">
      <span className="font-pretendard font-light text-xs text-white">
        #{content}
      </span>
    </div>
  );
}

export { Tag };
