import { useDispatch, useSelector } from 'react-redux';
import { useMemo } from 'react';
import type { AppDispatch, RootState } from '@store/store';
import type { Movie } from '@models/Movie';
import { setActiveMovie } from '@store/slices/moviesSlice';
import { addMovieThunk } from '@store/asyncThunk/addMovieThunk';
import { updateMovieThunk } from '@store/asyncThunk/updateMovieThunk';
import { removeMovieThunk } from '@store/asyncThunk/removeMovieThunk';
import { importMovieThunk } from '@store/asyncThunk/importMovieThunk';

export const useMovies = () => {
  const { movie, activeMovie, total } = useSelector(
    (state: RootState) => state.movieSlice,
  );
  const { query, page } = useSelector((state: RootState) => state.searchParams);
  const dispatch = useDispatch<AppDispatch>();

  const filtered = useMemo(() => {
    if (!query) return movie;

    const q = query.toLowerCase();

    return movie.filter(
      (m: Movie) =>
        m.title.toLowerCase().includes(q) ||
        (Array.isArray(m.actors) &&
          m.actors.some(actor => actor.toLowerCase().includes(q))),
    );
  }, [movie, query]);

  return {
    movies: filtered,
    activeMovie,
    total,
    page,
    toggleActiveMovie: (movie: Movie | null) => {
      dispatch(setActiveMovie(movie));
    },
    importMovies: (file: File) => dispatch(importMovieThunk(file)),
    AddMovie: (movie: Movie) => dispatch(addMovieThunk(movie)),
    removeMovie: (movie: Movie) => dispatch(removeMovieThunk(movie)),
    updateMovie: (movie: Movie) => dispatch(updateMovieThunk(movie)),
  };
};
