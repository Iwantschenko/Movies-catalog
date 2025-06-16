import { useDispatch, useSelector } from 'react-redux';
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
  const { page } = useSelector((state: RootState) => state.searchParams);
  const dispatch = useDispatch<AppDispatch>();

  return {
    movies: movie,
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
