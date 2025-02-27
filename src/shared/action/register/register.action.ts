import { PostType, ProjectType } from "@/entity";
import AlumniLinkAPI from "@/shared/config/AxiosConfig";

type PostProjectType = {
  body: ProjectType;
  token: string | null;
};

export const postProject = async ({ body, token }: PostProjectType) => {
  try {
    const res = await AlumniLinkAPI.post("/projects", body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (err) {
    return err;
  }
};

type PostQuestionType = {
  body: PostType;
  token: string | null;
};

export const postQuestion = async ({ body, token }: PostQuestionType) => {
  try {
    const res = await AlumniLinkAPI.post("/posts", body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (err) {
    return err;
  }
};

type PostTipType = {
  body: PostType;
  token: string | null;
};

export const postTip = async ({ body, token }: PostTipType) => {
  try {
    const res = await AlumniLinkAPI.post("/posts", body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (err) {
    return err;
  }
};
