import {
  Comment,
  Pagination,
  server_get_my_info,
  ViewEditor,
  WriteComment,
} from "@/shared";
import { get_single_info } from "./api/info.action";
import { get_comments } from "./api/get_comment.action";
import { SingleCommentType } from "@/shared/components/comment";

async function InfoSingleView({ id }: { id: string }) {
  const userData = await server_get_my_info();
  const data = await get_single_info(id);
  const comments = await get_comments({ postId: id, page: 0, size: 0 });

  const totalLength = comments.content.length ?? 1;
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
    <div className="px-20 py-10 w-full flex flex-col justify-start items-start gap-10">
      <div className="w-full flex justify-center items-center">
        <span className="font-pretendard font-black text-2xl text-black">
          {data.title ?? "Loading..."}
        </span>
      </div>
      <div className="w-full h-1 rounded-full bg-gray-50" />
      <div className="w-full flex flex-col justify-start items-start">
        <ViewEditor markdown={data.body} />
      </div>
      <div className="w-full flex flex-col justify-start items-start gap-4">
        <div className="w-full flex justify-center items-center"></div>
        {userData && <WriteComment postId={parseInt(id)} />}
        <div className="mt-2 w-full flex flex-col justify-start items-center gap-4">
          {comments.content.map((item: SingleCommentType, key: number) => {
            return (
              <Comment
                id={item.id}
                author={item.author}
                body={item.body}
                createdAt={item.createdAt}
                key={key}
              />
            );
          })}
        </div>
        <div className="w-full flex justify-center items-center">
          <Pagination
            type="info"
            size={10}
            index={1}
            totalPages={totalLength}
          />
        </div>
      </div>
    </div>
  );
}

export { InfoSingleView };
