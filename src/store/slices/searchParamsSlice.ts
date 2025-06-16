import type {
  SearchParamsStateType,
  SortOrder,
} from '@models/SearchParamsStateType';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

const initialState: SearchParamsStateType = {
  query: '',
  sort: 'ASC',
  page: 1,
};

export const searchParamsSlice = createSlice({
  name: 'searchParams',
  initialState: initialState,
  reducers: {
    setQuery(state, action: PayloadAction<string | null>) {
      state.query = action.payload;
    },
    setSort(state, action: PayloadAction<SortOrder>) {
      state.sort = action.payload;
    },
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    setParams(state, action: PayloadAction<Partial<SearchParamsStateType>>) {
      Object.assign(state, action.payload);
    },
  },
});

export const { setQuery, setSort, setPage, setParams } =
  searchParamsSlice.actions;
export default searchParamsSlice;
