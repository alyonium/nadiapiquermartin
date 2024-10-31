export type PaginatedResponse<T> = {
  data: T[];
  meta: {
    page: number;
    pageCount: number;
    pageSize: number;
    total: number;
  };
};
