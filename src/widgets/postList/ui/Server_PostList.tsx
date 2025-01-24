import { T_SinglePost_Type } from "@/entity/post/post";
import { get_post_list } from "@/shared/api/post.action";
import { Client_ListCard } from "@/widgets/postList/ui/Client_ListCard";

async function Server_PostList() {
  const data = await get_post_list();
  return (
    <div className="px-12 py-10 w-full flex justify-center items-start">
      <div className="w-full flex flex-col justify-start items-start gap-8">
        {data &&
          data.map((item: T_SinglePost_Type, key: number) => {
            return (
              <Client_ListCard
                id={item.id}
                body={item.body}
                nickname={item.nickname}
                title={item.title}
                isModified={item.modifiedTime}
                key={key}
              />
            );
          })}
      </div>
    </div>
  );
}

export { Server_PostList };
