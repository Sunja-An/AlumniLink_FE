import {
  getSingleInfo,
  getSingleInfoComments,
  ListBtn,
  Tag,
  timeFormatter,
  tokenDecoder,
  ViewEditor,
} from "@/shared";
import { CommentArea } from "@/widgets";

export default async function AlumniLink_Info_SinglePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = (await params) ?? {
    id: "0",
  };
  if (Array.isArray(id) || id === undefined) {
    console.log(id);
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
    page: 1,
    size: 10,
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
          {timeFormatter(singleInfo.startTime)}
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
              {singleInfoComments.totalElement ?? 0}
            </span>
          </div>
          <CommentArea
            user={user ? true : false}
            postId={parseInt(id)}
            singleInfoComments={singleInfoComments}
          />
        </div>
      </div>
    </div>
  );
}

async function AlumniLink_SingleInfo_Comment() {}
