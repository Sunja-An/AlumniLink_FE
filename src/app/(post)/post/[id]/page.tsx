import { type T_SinglePost_Type } from "@/entity/post/post";
import { get_single_post } from "@/shared/api/post.action";
import { SinglePostView, SingleTitleView } from "@/views/post";

export default async function AlumiLink_Post_Single_Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const data: T_SinglePost_Type | 404 | undefined = await get_single_post({
    id: parseInt(id),
  });

  if (data === 404 || data === undefined) {
    return <div>Failed</div>;
  }

  return (
    <div className="w-full h-screen flex flex-col justify-start items-start gap-8">
      <div className="w-full">
        <SingleTitleView title={data.title} />
      </div>
      <div className="w-full h-[1px] rounded-xl bg-white" />
      <div className="w-full">
        <SinglePostView content={data.body} />
      </div>
      {/*  Comment Line */}
      <div className="w-full flex flex-col justify-start items-start gap-8">
        <p className="font-studioSans font-semibold text-xl text-black">
          Comments
        </p>
      </div>
    </div>
  );
}
