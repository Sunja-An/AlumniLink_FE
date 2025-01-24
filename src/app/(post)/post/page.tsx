import { PostListView } from "@/views/post/ui/PostListView";

export default async function AlumniLink_Post_List_Page() {
  return (
    <div className="w-full flex flex-col justify-start items-start gap-8">
      <p className="text-center font-studioSans font-bold text-4xl text-black">
        게시판
      </p>
      <PostListView />
    </div>
  );
}
