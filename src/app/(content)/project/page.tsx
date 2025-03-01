import { SingleProjectType } from "@/entity";
import { getProjectList, Pagination, ProjectCard, SearchBar } from "@/shared";

export default async function AlumniLink_Project_ListPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { page, size, sort } = await searchParams;
  if (
    Array.isArray(page) ||
    Array.isArray(size) ||
    sort === undefined ||
    sort.length === 1
  ) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <span className="font-pretendard font-bold xl:text-5xl lg:text-3xl md:text-xl text-black">
          URL 이 잘못되었습니다.
        </span>
      </div>
    );
  }

  const projectListData = await getProjectList({
    page: parseInt(page ?? "0"),
    size: parseInt(size ?? "0"),
    sort: sort[1] === "DESC" ? "DESC" : "ASC",
  });
  if (projectListData.totalElements === 0) {
    return (
      <div className="px-20 py-5 w-full h-full flex flex-col justify-start items-start gap-8">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <div className="w-full flex flex-col justify-start items-center">
            <div className="w-full flex justify-between items-center">
              <span className="font-pretendard font-bold text-xl text-black">
                게시물
              </span>
              <span className="font-pretendard font-bold text-xl text-blue-500">
                0건
              </span>
              <div className="w-1/3 min-w-40 min-h-20 flex justify-end items-center">
                {/* <EditBtn /> */}
              </div>
            </div>
            <span className="font-pretendard font-bold text-5xl text-black">
              데이터가 없습니다.
            </span>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="px-32 py-5 w-full h-full flex flex-col justify-start items-start gap-8">
      <div className="w-full flex flex-col justify-start items-start gap-4">
        <div className="w-full flex justify-start items-center gap-4">
          <span className="font-pretendard font-bold text-xl text-black">
            게시물
          </span>
          <span className="font-pretendard font-bold text-xl text-blue-500">
            {projectListData.totalElements ?? 0}건
          </span>
        </div>
        <div className="w-full flex justify-start items-center gap-4">
          <SearchBar />
        </div>
        <div className="w-full flex flex-col justify-start items-start">
          {projectListData.content.map(
            (item: SingleProjectType, key: number) => {
              return <ProjectCard content={item} key={key} />;
            }
          )}
        </div>
        <div className="w-full flex justify-center items-center">
          <Pagination
            totalPages={projectListData.totalPages}
            index={parseInt(page ?? "0") + 1}
            size={projectListData.pageable.pageSize}
            type="project"
            sort={sort === "DESC" ? "DESC" : "ASC"}
          />
        </div>
      </div>
    </div>
  );
}
