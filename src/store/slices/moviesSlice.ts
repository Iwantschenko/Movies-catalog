import type { Movie } from '@models/Movie';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { addMovieThunk } from '@store/asyncThunk/addMovieThunk';
import {
  getMovieThunk,
  type GetMoviesThunkResponseType,
} from '@store/asyncThunk/getMovieThunk';
import { importMovieThunk } from '@store/asyncThunk/importMovieThunk';
import { removeMovieThunk } from '@store/asyncThunk/removeMovieThunk';
import { updateMovieThunk } from '@store/asyncThunk/updateMovieThunk';

export interface MovieStateType {
  movie: Movie[];
  total: number;
  activeMovie: Movie | null;
}

const initialState: MovieStateType = {
  activeMovie: null,
  total: 0,
  movie: [],
};

const moviesSlice = createSlice({
  name: 'movieSlice',
  initialState,
  reducers: {
    setActiveMovie: (state, action: PayloadAction<Movie | null>) => {
      state.activeMovie = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(
        getMovieThunk.fulfilled,
        (state, action: PayloadAction<GetMoviesThunkResponseType>) => {
          state.movie = action.payload.data;
          state.total = action.payload.total;
        },
      )
      .addCase(
        importMovieThunk.fulfilled,
        (state, action: PayloadAction<GetMoviesThunkResponseType>) => {
          state.movie = action.payload.data;
          state.total = action.payload.total;
        },
      )
      .addCase(
        addMovieThunk.fulfilled,
        (state, action: PayloadAction<Movie>) => {
          state.movie = [...state.movie, action.payload];
          state.total++;
        },
      )
      .addCase(
        updateMovieThunk.fulfilled,
        (state, action: PayloadAction<Movie>) => {
          const movies = state.movie;
          const newMovie = action.payload;

          state.movie = movies.map(movie =>
            movie.id === newMovie.id ? newMovie : movie,
          );
        },
      )
      .addCase(
        removeMovieThunk.fulfilled,
        (state, action: PayloadAction<Movie>) => {
          const idToRemove = action.payload.id;

          state.movie = state.movie.filter(movie => movie.id !== idToRemove);
        },
      );
  },
});

export const { setActiveMovie } = moviesSlice.actions;
export default moviesSlice;
