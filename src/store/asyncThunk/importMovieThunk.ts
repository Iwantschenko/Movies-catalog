import { createAsyncThunk } from '@reduxjs/toolkit';
import type { GetMoviesThunkResponseType } from './getMovieThunk';
const AUTH_TOKEN = import.meta.env.VITE_AUTH_TOKEN;
const API_URL = import.meta.env.VITE_API_URL;

export const importMovieThunk = createAsyncThunk(
  'ImportMovieFile',
  async (file: File) => {
    const formData = new FormData();

    formData.append('movies', file);

    const response = await fetch(`${API_URL}/movies/import`, {
      method: 'POST',
      headers: {
        Authorization: AUTH_TOKEN,
      },
      body: formData,
    });

    const data = await response.json();

    const result: GetMoviesThunkResponseType = {
      data: data.data,
      total: data.meta.total,
    };

    return result;
  },
);
