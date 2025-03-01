"use client";

import React from "react";

import type { ServerCommentPagingObject, SingleCommentType } from "@/entity";
import { Comment, WriteComment } from "@/shared";

type CommentAreaType = {
  user: boolean;
  postId: number;
  singleInfoComments: ServerCommentPagingObject;
};

function CommentArea({ user, postId, singleInfoComments }: CommentAreaType) {
  return (
    <div className="w-full flex flex-col justify-start items-center">
      {user && <WriteComment postId={postId} />}
      <div className="mt-2 w-full flex flex-col justify-start items-center gap-4">
        {singleInfoComments.content.map(
          (item: SingleCommentType, key: number) => {
            return (
              <Comment
                id={item.id}
                author={item.author}
                body={item.body}
                createdAt={item.createdAt}
                key={key}
              />
            );
          }
        )}
      </div>
    </div>
  );
}

export { CommentArea };
