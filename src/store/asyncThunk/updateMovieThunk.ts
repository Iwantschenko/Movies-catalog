import type { Movie } from '@models/Movie';
import { createAsyncThunk } from '@reduxjs/toolkit';

const AUTH_TOKEN = import.meta.env.VITE_AUTH_TOKEN;

export const updateMovieThunk = createAsyncThunk(
  'Update',
  async (newMovie: Movie) => {
    const response = await fetch(`/api/movies/${newMovie.id}`, {
      method: 'PATCH',
      headers: {
        Authorization: AUTH_TOKEN,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newMovie),
    });

    const data = await response.json();

    const movie: Movie = {
      id: data.data.id,
      title: data.data.title,
      year: data.data.year,
      format: data.data.format,
      actors: data.data.actors.map((actor: any) => actor.name),
    };

    return movie;
  },
);
