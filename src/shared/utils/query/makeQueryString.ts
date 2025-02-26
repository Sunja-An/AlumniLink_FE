const makeQueryString = (url: string, page: number, size: number) => {
  const result = `/${url}?page=${page}&size=${size}`;
  if (page < 0 || size < 0) {
    return false;
  }
  return result;
};

const makeCommentQueryString = (
  url: string,
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
