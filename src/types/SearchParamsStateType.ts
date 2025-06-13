export interface SearchParamsStateType {
  query: string | null;
  sort: SortOrder;
  page: number;
}

export type SortOrder = 'asc' | 'desc';
