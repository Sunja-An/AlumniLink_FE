"use server";

import type { PostType, ProjectType } from "@/entity";
import AlumniLinkAPI from "@/shared/config/AxiosConfig";

type PostProjectType = {
  body: ProjectType;
};

export const postProject = async ({ body }: PostProjectType) => {
  try {
    const res = await AlumniLinkAPI.post("/projects", body);
    if (res.status === 201) {
      return true;
    }
  } catch (err) {
    return err;
  }
};

type PostQuestionType = {
  body: PostType;
};

export const postQuestion = async ({ body }: PostQuestionType) => {
  try {
    const res = await AlumniLinkAPI.post("/posts", body);
    if (res.status === 201) {
      return true;
    }
  } catch (err) {
    return err;
  }
};

type PostTipType = {
  body: PostType;
};

export const postTip = async ({ body }: PostTipType) => {
  try {
    const res = await AlumniLinkAPI.post("/posts", body);
    if (res.status === 201) {
      return true;
    }
  } catch (err) {
    return err;
  }
};
