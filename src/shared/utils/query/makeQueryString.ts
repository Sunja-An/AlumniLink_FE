import type {
  QueryStringSortType,
  UrlQueryString,
  QueryStringUrl,
} from "@/shared/types";

const makeQueryString = (
  url: QueryStringUrl,
  page: number,
  size: number,
  sort: QueryStringSortType
) => {
  const result = `/${url}?page=${page}&size=${size}&sort=id&sort=${sort}`;
  if (page < 0 || size < 0) {
    return false;
  }
  return result;
};

const makeQueryStringMypage = (
  url: QueryStringUrl,
  page: number,
  size: number,
  sort: QueryStringSortType
) => {
  const result = `/${url}/my?page=${page}&size=${size}&sort=id&sort=${sort}`;
  if (page < 0 || size < 0) {
    return false;
  }
  return result;
};

const makeUrlQueryString = (
  url: UrlQueryString,
  page: number,
  size: number,
  sort: QueryStringSortType
) => {
  const result = `/${url}?page=${page}&size=${size}&sort=id&sort=${sort}`;
  if (page < 0 || size < 0) {
    return false;
  }
  return result;
};

export { makeQueryString, makeQueryStringMypage, makeUrlQueryString };
