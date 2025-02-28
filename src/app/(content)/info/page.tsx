import { SinglePostType } from "@/entity/info/post";
import { getInfoList, InfoCard, Pagination, SearchBar } from "@/shared";

export default async function AlumniLink_Info_ListPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { page, size } = await searchParams;

  if (Array.isArray(page) || Array.isArray(size)) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <span className="font-pretendard font-bold xl:text-5xl lg:text-3xl md:text-xl text-black">
          잘못된 접근입니다.
        </span>
      </div>
    );
  }

  const InfoDatas = await getInfoList({
    page: parseInt(page ?? "0"),
    size: parseInt(size ?? "0"),
  });

  if (InfoDatas === undefined || InfoDatas === false) {
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
            </div>
            <span className="font-pretendard font-bold text-5xl text-black">
              데이터가 없습니다.
            </span>
          </div>
        </div>
      </div>
    );
  }

  if (InfoDatas.totalElements === 0) {
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
            </div>
            <span className="font-pretendard font-bold text-5xl text-black">
              데이터가 없습니다.
            </span>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="px-32 py-5 w-full h-full flex flex-col justify-start items-start gap-8">
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <div className="w-full flex justify-start items-center gap-4">
            <span className="font-pretendard font-bold text-xl text-black">
              게시물
            </span>
            <span className="font-pretendard font-bold text-xl text-blue-500">
              {InfoDatas.totalElements ?? 0}건
            </span>
          </div>
          <div className="w-full flex justify-start items-center gap-4">
            <SearchBar />
          </div>
          <div className="w-full flex flex-col justify-start items-start">
            {InfoDatas.content.map((item: SinglePostType, key: number) => {
              return <InfoCard content={item} key={key} />;
            })}
          </div>
          <div className="w-full flex justify-center items-center">
            <Pagination
              totalPages={InfoDatas.totalPages}
              index={parseInt(page ?? "0") + 1}
              size={InfoDatas.pageable.pageSize}
              type="info"
            />
          </div>
        </div>
      </div>
    );
  }
}
