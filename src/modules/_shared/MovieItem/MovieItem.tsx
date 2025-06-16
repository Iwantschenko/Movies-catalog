import type { Movie } from '@models/Movie';
import styles from './MovieItem.module.scss';
import { ArrowButton } from '../ArrowButton';
import { MovieInfo } from '../MovieInfo';
import { MovieModalWindow } from '../MovieModal';
import { useModal } from '@hooks/useModal';
import { useEffect } from 'react';
import { useMovies } from '@hooks/useMovies';

interface Props {
  movie: Movie;
}

const API_URL = import.meta.env.VITE_API_URL;
const AUTH_TOKEN = import.meta.env.VITE_AUTH_TOKEN;

export const MovieItem: React.FC<Props> = ({ movie }) => {
  const { modal, openModal, closeModal } = useModal();
  const {
    activeMovie,
    toggleActiveMovie,
    updateMovie,
    removeMovie: RemoveMovie,
  } = useMovies();

  const handleClick = () => {
    if (activeMovie?.id === movie.id) {
      toggleActiveMovie(null);
    } else {
      toggleActiveMovie(movie);
    }
  };

  useEffect(() => {
    if (activeMovie?.id !== movie.id || activeMovie.actors?.length) return;

    const fetchMovie = async () => {
      try {
        const res = await fetch(`${API_URL}/movies/${movie.id}`, {
          headers: { Authorization: AUTH_TOKEN },
        });

        const data = await res.json();

        toggleActiveMovie({
          ...movie,
          actors: data.data.actors.map((a: any) => a.name),
        });
      } catch {}
    };

    fetchMovie();
  }, [activeMovie?.id]);

  return (
    <article className={styles.Movie}>
      <div className={styles.MovieRow}>
        <div className={styles.MovieButtons}>
          <ArrowButton
            direction={activeMovie?.id === movie.id ? 'Up' : 'Down'}
            click={handleClick}
          />
        </div>
        <h3>{movie.title}</h3>
      </div>

      {activeMovie?.id === movie.id && (
        <MovieInfo
          movie={activeMovie}
          onEdit={() => openModal('editMovie')}
          onDelete={(movie: Movie) => RemoveMovie(movie)}
        />
      )}

      {activeMovie?.id === movie.id && activeMovie.actors?.length > 0 && (
        <MovieModalWindow
          isOpen={modal === 'editMovie'}
          movie={activeMovie}
          onClose={closeModal}
          onSubmit={(movie: Movie) => updateMovie(movie)}
        />
      )}
    </article>
  );
};
