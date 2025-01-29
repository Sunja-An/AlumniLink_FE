export const makeQueryString = (url: string, page: number, size: number) => {
  const result = `/${url}?page=${page}&size=${size}`;
  return result;
};
