"use server";

import AlumniLinkAPI from "@/shared/config/AxiosConfig";

export const get_single_project = async (id: string) => {
  try {
    const res = await AlumniLinkAPI.get(`/projects/${id}`);
    if (res.status === 200) {
      return res.data;
    }
  } catch (err: unknown) {
    console.error(err);
    return false;
  }
};
