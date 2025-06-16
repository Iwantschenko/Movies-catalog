/* eslint-disable no-param-reassign */
import type { Movie } from '@models/Movie';
import { createAsyncThunk } from '@reduxjs/toolkit';
import type { RootState } from '@store/store';

const AUTH_TOKEN = import.meta.env.VITE_AUTH_TOKEN;
const API_URL = import.meta.env.VITE_API_URL;

export interface GetMoviesThunkResponseType {
  data: Movie[];
  total: number;
}

export const getMovieThunk = createAsyncThunk<
  GetMoviesThunkResponseType,
  void,
  { state: RootState }
>('Movies', async (_, thunkAPI) => {
  const { page, sort } = thunkAPI.getState().searchParams;

  const perPage = 5;
  const offset = (page - 1) * perPage;

  const paramsObject: Record<string, string | number> = {
    limit: perPage,
    offset,
    ...(sort && {
      sort: 'title',
      order: sort,
    }),
  };

  const searchParams = new URLSearchParams(
    Object.entries(paramsObject).reduce(
      (acc, [key, value]) => {
        if (value != null) {
          acc[key] = String(value);
        }

        return acc;
      },
      {} as Record<string, string>,
    ),
  );

  const url = `${API_URL}/movies?${searchParams.toString()}`;

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: AUTH_TOKEN,
    },
  });

  const data = await response.json();

  const res: GetMoviesThunkResponseType = {
    data: data.data,
    total: data.meta.total,
  };

  return res;
});
