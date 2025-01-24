import React from "react";

import { Server_PostList } from "@/widgets/postList/ui/Server_PostList";
import { PostSearchBar } from "@/views/post/ui/PostSearchBar";

function PostListView() {
  return (
    <div className="w-full flex flex-col justify-start items-start gap-8">
      {/* SearchBar */}
      <div className="px-12 w-full">
        <PostSearchBar />
      </div>

      {/* Post Lists */}
      <article className="w-full flex justify-center items-center">
        <Server_PostList />
      </article>

      {/* Pagination */}
      <div className="w-full flex justify-center items-center"></div>
    </div>
  );
}

export { PostListView };
