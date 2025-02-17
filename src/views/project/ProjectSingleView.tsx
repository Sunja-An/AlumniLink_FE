import { ListBtn, RequestBtn, ViewEditor } from "@/shared";
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
    <div className="px-20 py-5 w-full flex justify-start items-start">
      <div className="wrapper px-10 py-5 w-full flex flex-col justify-start items-start rounded-2xl gap-8 bg-secondary shadow-xl">
        <div className="w-full flex justify-center items-center">
          <span className="font-pretendard font-black text-2xl text-black">
            {data.name ?? "Loading..."}
          </span>
        </div>
        <div className="w-full flex justify-center items-center">
          <ViewEditor markdown={data.info} />
        </div>
        <div className="button-layer w-full flex flex-col justify-center items-center gap-4">
          <RequestBtn id={id} />
        </div>
      </div>
    </div>
  );
}

export { ProjectSingleView };
