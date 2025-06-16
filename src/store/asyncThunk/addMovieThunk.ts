import type { Movie } from '@models/Movie';
import { createAsyncThunk } from '@reduxjs/toolkit';

const AUTH_TOKEN = import.meta.env.VITE_AUTH_TOKEN;
const API_URL = import.meta.env.VITE_API_URL;

type NewMoviePayload = Omit<Movie, 'id'>;

export const addMovieThunk = createAsyncThunk(
  'movies/add',
  async (newMovie: NewMoviePayload, thunkAPI) => {
    const response = await fetch(`${API_URL}/movies`, {
      method: 'POST',
      headers: {
        Authorization: AUTH_TOKEN,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newMovie),
    });

    if (!response.ok) {
      const error = await response.text();

      return thunkAPI.rejectWithValue(error);
    }

    const data = await response.json();

    const transformedMovie: Movie = {
      id: String(data.data.id),
      title: data.data.title,
      year: data.data.year,
      format: data.data.format,
      actors: data.data.actors.map((actor: any) => actor.name),
    };

    return transformedMovie;
  },
);
