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

export type ServerPostPagingObject = {
  content: T_SinglePost[];
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number; // 총 Post 개수
  pageable: {
    offset: number;
    pageNumber: number; // 몇 페이지인지
    pageSize: number; // 1 page 에 몇개씩 나타내지는지
    paged: boolean; // 페이징 되었는지 Check
    sort: ServerSortType[];
  };
  size: number; // 1 page 에 몇개씩 나타내지는지
  sort: ServerSortType;
  totalElements: number; // 총 Post 개수
  totalPages: number; // element 와 size 로 인해, 몇 페이지가 총 나오는지 Check
};

type ServerSortType = {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
};
