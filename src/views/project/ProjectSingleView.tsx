import { get_single_project } from "@/views/project/api/project.action";

async function ProjectSingleView({ id }: { id: string }) {
  const data = await get_single_project(id);
  if (data === false || data === undefined) {
    return (
      <div className="px-20 py-10 w-full flex flex-col justify-center items-center">
        <span className="font-pretendard font-bold text-5xl text-black">
          서버에 오류가 있습니다.🥲
        </span>
      </div>
    );
  }
  return (
    <div className="px-20 py-10 w-full flex flex-col justify-start items-start">
      <div className="w-full flex justify-start items-center">
        <span className="font-pretendard font-black text-2xl text-black">
          {data.title ?? "Loading..."}
        </span>
      </div>
      <div className=""></div>
      <div className=""></div>
    </div>
  );
}

export { ProjectSingleView };
