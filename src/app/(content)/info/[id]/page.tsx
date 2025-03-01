import {
  getSingleInfo,
  getSingleInfoComments,
  ListBtn,
  Pagination,
  Tag,
  timeFormatter,
  tokenDecoder,
  ViewEditor,
} from "@/shared";
import { CommentArea } from "@/widgets";

export default async function AlumniLink_Info_SinglePage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { id } = (await params) ?? {
    id: "0",
  };
  const { page, size, sort } = await searchParams;

  if (
    Array.isArray(id) ||
    id === undefined ||
    Array.isArray(page) ||
    Array.isArray(size) ||
    page === undefined ||
    size === undefined ||
    sort === undefined ||
    sort.length === 1
  ) {
    return (
      <div className="py-5 w-full h-full flex justify-center items-center">
        <span className="font-pretendard font-bold xl:text-5xl lg:text-3xl md:text-xl text-black">
          URL 이 잘못되었습니다.
        </span>
      </div>
    );
  }

  const userData = tokenDecoder();
  const singleInfoData = getSingleInfo(id);
  const singleInfoCommentsData = getSingleInfoComments({
    id: id,
    page: parseInt(page),
    size: parseInt(size),
    sort: sort === "DESC" ? "DESC" : "ASC",
  });

  const [user, singleInfo, singleInfoComments] = await Promise.all([
    userData,
    singleInfoData,
    singleInfoCommentsData,
  ]);

  return (
    <div className="px-60 py-5 w-full flex flex-col justify-start items-start">
      <div className="w-full flex flex-col justify-start items-start gap-12">
        <div className="w-full flex justify-start items-center">
          <span className="font-pretendard font-black text-5xl text-black">
            {singleInfo.title}
          </span>
        </div>
        <div className="w-full flex justify-start items-center">
          <Tag content={singleInfo.tag} />
        </div>
        <div className="w-full flex justify-start items-center">
          <div className="px-5 py-2 w-full flex justify-start items-center min-h-10 rounded-md bg-slate-50 border gap-2">
            <span className="font-pretendard font-semibold text-sm text-black">
              작성일
            </span>
            <span className="font-pretendard font-light text-sm text-black">
              {timeFormatter(singleInfo.startTime)}
            </span>
          </div>
        </div>
        <div className="w-full flex flex-col justify-start items-start">
          <ViewEditor markdown={singleInfo.body} />
        </div>
        <div className="w-full flex justify-start items-center">
          <ListBtn path="info" />
        </div>
        <div className="w-full flex flex-col justify-start items-start gap-4">
          <div className="w-full flex justify-start items-center gap-2">
            <span className="font-pretendard font-semibold text-base text-black">
              댓글
            </span>
            <span className="font-pretendard font-semibold text-base text-black">
              {singleInfoComments.totalElements ?? 0}
            </span>
          </div>
          <CommentArea
            user={user ? true : false}
            postId={parseInt(id)}
            singleInfoComments={singleInfoComments}
          />
          <div className="w-full flex justify-center items-center">
            <Pagination
              totalPages={singleInfoComments.totalPages}
              id={id}
              index={parseInt(page ?? "0") + 1}
              size={singleInfoComments.pageable.pageSize}
              sort="ASC"
              type="comment"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
