import type { Movie } from '@models/Movie';
import { createAsyncThunk } from '@reduxjs/toolkit';
const AUTH_TOKEN = import.meta.env.VITE_AUTH_TOKEN;
const API_URL = import.meta.env.VITE_API_URL;

export const removeMovieThunk = createAsyncThunk<Movie, Movie>(
  'RemoveMovie',
  async (movie: Movie) => {
    const response = await fetch(`${API_URL}/movies/${movie.id}`, {
      method: 'DELETE',
      headers: {
        Authorization: AUTH_TOKEN,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to delete movie');
    }

    return movie;
  },
);
