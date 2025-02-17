"use client";

import { type T_SingleProject } from "@/entity/project/project";
import { ICON_PROJECT } from "@/shared/constants";
import { timeChanger } from "@/shared/utils/changeTime";
import Image from "next/image";
import Link from "next/link";

function ProjectCard({
  content,
  className,
}: {
  content: T_SingleProject;
  className?: string;
}) {
  return (
    <Link
      className={`px-20 py-10 w-full min-h-40 flex flex-col justify-start items-start rounded-2xl shadow-md cursor-pointer bg-secondary gap-4 ${
        className ?? ""
      }`}
      href={`/project/${content.id}`}
    >
      <div className="w-full flex justify-start items-center gap-4">
        <Image src={ICON_PROJECT} alt="icon-project" width={20} height={20} />
        <span className="uppercase font-pretendard font-black text-base text-black">
          {content.leaderName}
        </span>
        <span className="font-pretendard font-medium text-xs text-gray-300">
          {timeChanger(content.deadline)}
        </span>
      </div>
      <div className="w-full flex justify-start items-center">
        <span className="font-pretendard font-bold text-base text-black">
          {content.name}
        </span>
      </div>
      <div className="w-full flex justify-start items-center">
        <span className="font-pretendard font-normal text-sm text-black">
          {content.info}
        </span>
      </div>
    </Link>
  );
}

export { ProjectCard };
