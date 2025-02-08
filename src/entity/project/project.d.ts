export type T_Project = {
  name: string;
  info: string;
  link: string;
  maxCount: number;
  deadline: string;
};

export type T_SingleProject = {
  name: string;
  info: string;
  gitLink: string;
  leaderName: string;
  maxCount: number;
  nowCount: number;
  deadline: string;
};

export type ServerProjectPagingObject = {
  content: T_SingleProject[];
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
