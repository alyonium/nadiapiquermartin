export type PaginatedResponse<T> = {
  data: T[];
  meta: {
    page: number;
    pageCount: number;
    pageSize: number;
    total: number;
  };
};

export type SingleEntityResponse<T> = {
  data: T;
  meta: {};
};
