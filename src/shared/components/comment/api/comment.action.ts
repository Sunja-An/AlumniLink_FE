import AlumniLinkAPI from "@/shared/config/AxiosConfig";

export const post_comment = async ({
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
    const res = await AlumniLinkAPI.post("/comments", request);
    if (res.status == 201) {
      return true;
    }
  } catch (err) {
    return err;
  }
};
