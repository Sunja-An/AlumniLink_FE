import { SearchBar } from "@/shared";
import { get_project_list } from "@/widgets/project/api/project.action";
import ClientProjectList from "@/widgets/project/ClientProjectList";

export default async function ProjectView({
  page,
  size,
}: {
  page: number;
  size: number;
}) {
  const InfoDatas = await get_project_list(page, size);
  console.log(InfoDatas);
  return (
    <div className="px-20 py-10 w-full h-full flex flex-col justify-start items-start gap-8">
      <div className="w-full flex justify-start items-center">
        <SearchBar />
      </div>
      <div className="w-full flex flex-col justify-start items-start">
        <ClientProjectList data={InfoDatas} />
      </div>
    </div>
  );
}
