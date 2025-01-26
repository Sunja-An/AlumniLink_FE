export type T_Post = {
  title: string;
  body: string;
  tag: TAG;
  description: string;
};

export type T_SinglePost = {
  id: number;
  nickname: string;
  title: string;
  body: string;
  description: string;
  tag: string;
  startTime: string;
  modifiedTime: string;
};

export type TAG = "TIP" | "PROJECT" | "RESUME";

type ServerPosts = {
  content: [[Object]];
  pageable: {
    pageNumber: number;
    pageSize: number;
    sort: [Object];
    offset: number;
    paged: boolean;
    unpaged: boolean;
  };
  totalPages: number;
  totalElements: number;
  last: boolean;
  size: number;
  number: number;
  sort: { empty: true; sorted: false; unsorted: true };
  numberOfElements: number;
  first: boolean;
  empty: boolean;
};
