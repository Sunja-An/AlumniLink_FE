"use server";

import AlumniLinkAPI from "@/shared/config/AxiosConfig";

export const postComment = async ({
  postId,
  body,
}: {
  postId: number;
  body: string;
}) => {
  try {
    const request = {
      postId,
      body,
    };
    const res = await AlumniLinkAPI.post("comments", JSON.stringify(request));
    console.log(res);
    if (res.status === 201) {
      return true;
    } else if (res.status === 400) {
      return false;
    }
  } catch (err) {
    return err;
  }
};
