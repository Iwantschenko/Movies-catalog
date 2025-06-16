import { createAsyncThunk } from '@reduxjs/toolkit';
import type { GetMoviesThunkResponseType } from './getMovieThunk';
const AUTH_TOKEN = import.meta.env.VITE_AUTH_TOKEN;

export const importMovieThunk = createAsyncThunk(
  'ImportMovieFile',
  async (file: File) => {
    const formData = new FormData();

    formData.append('movies', file);

    const response = await fetch(`/api/movies/import`, {
      method: 'POST',
      headers: {
        Authorization: AUTH_TOKEN,
      },
      body: formData,
    });

    const data = await response.json();

    const result: GetMoviesThunkResponseType = {
      data: data.data.slice(0, 5),
      total: data.meta.total,
    };

    return result;
  },
);
