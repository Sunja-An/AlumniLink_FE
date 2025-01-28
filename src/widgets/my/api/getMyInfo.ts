import { T_SinglePost } from "@/entity/info/post";
import AlumniLinkAPI from "@/shared/config/AxiosConfig";
import { makeQueryString } from "@/shared/utils/make_query_string";

export const getMyPosts = async () => {
  try {
    const url = makeQueryString("posts/my", 0, 0);
    const res = await AlumniLinkAPI.get(url);
    return res.data.content as T_SinglePost[];
  } catch (err) {
    return false;
  }
};

export const getMyProjects = () => {};
