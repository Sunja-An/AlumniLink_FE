import { T_SinglePost } from "@/entity/info/post";
import { T_SingleProject } from "@/entity/project/project";
import AlumniLinkAPI from "@/shared/config/AxiosConfig";
import { makeQueryString } from "@/shared/utils/make_query_string";

export const getMyPosts = async () => {
  try {
    const url = makeQueryString("posts/my", 0, 0);
    const res = await AlumniLinkAPI.get(url);
    return res.data.content as T_SinglePost[];
  } catch (err) {
    console.error(err);
    return false;
  }
};

export const getMyProjects = async () => {
  try {
    const url = makeQueryString("projects/my", 0, 0);
    const res = await AlumniLinkAPI.get(url);
    return res.data.content as T_SingleProject[];
  } catch (err) {
    console.error(err);
    return false;
  }
};
