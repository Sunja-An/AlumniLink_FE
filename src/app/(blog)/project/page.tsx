import ProjectView from "@/views/project/ProjectView";

export default async function AlumniLink_Project_ListPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { page, size } = (await searchParams) ?? {
    page: 0,
    size: 0,
  };
  if (Array.isArray(page) || Array.isArray(size)) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <span className="font-pretendard font-bold xl:text-5xl lg:text-3xl md:text-xl text-black">
          URL 이 잘못되었습니다.
        </span>
      </div>
    );
  }
  return (
    <ProjectView page={parseInt(page ?? "0")} size={parseInt(size ?? "0")} />
  );
}
