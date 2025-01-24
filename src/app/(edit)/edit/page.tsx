"use client";

import React, { type ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";

import { PostEdit } from "@/views/post";
import { EditHamburger } from "@/widgets/hamburger";
import { type T_Posting } from "@/entity/post/tag";
import { type T_Posting_Type } from "@/entity/post/post";

import AlumniLinkAPI from "@/shared/config/AxiosConfig";

export default function AlumniLink_Write_New_Page() {
  const router = useRouter();

  const [title, setTitle] = useState<string>("");

  const [content, setContent] = useState<string>("");

  const [tag, setTag] = useState<T_Posting>("QUESTION");

  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTitle(value);
  };

  const onSubmitPost = async () => {
    const res = await post_my_posting({
      body: content,
      title: title,
      tag: tag,
    });
    if (res.statusCode === 200) {
      router.push("/post");
    } else if (res.statusCode === 404) {
      alert("Client Error");
    } else if (res.statusCode === 500) {
      alert("Parameter Error");
    } else {
      alert("Server Error");
    }
  };

  return (
    <div className="w-full flex justify-center items-start gap-8">
      <PostEdit
        content={content}
        titleValue={title}
        onChangeStringValue={setContent}
        onChangeTitle={onChangeTitle}
      />
      <div className="hidden xl:block">
        <EditHamburger onSubmitPost={onSubmitPost} />
      </div>
    </div>
  );
}

const post_my_posting = async ({ body, tag, title }: T_Posting_Type) => {
  try {
    const request = {
      title: title,
      body: body,
      tag: tag,
    };
    const res = await AlumniLinkAPI.post("/posts", request);
    return { data: res.data, statusCode: 200 }; // Success
  } catch (err: any) {
    console.log(err);
    return { data: err.message, statusCode: err.status };
  }
};
