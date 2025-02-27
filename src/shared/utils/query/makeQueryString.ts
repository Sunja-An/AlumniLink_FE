type QueryStringUrl = "projects" | "posts";

const makeQueryString = (url: QueryStringUrl, page: number, size: number) => {
  const result = `/${url}?page=${page}&size=${size}`;
  if (page < 0 || size < 0) {
    return false;
  }
  return result;
};

const makeCommentQueryString = (
  url: QueryStringUrl,
  postId: string,
  page: number,
  size: number
) => {
  const result = `/${url}?postId=${postId}&page=${page}&size=${size}`;
  if (page < 0 || size < 0) {
    return false;
  }
  return result;
};

export { makeQueryString, makeCommentQueryString };
