import type { Movie } from '@models/Movie';
import styles from './MovieItem.module.scss';
import { ArrowButton } from '../ArrowButton';
import { useState } from 'react';
import { MovieInfo } from '../MovieInfo';

interface Props {
  movie: Movie;
}

export const MovieItem: React.FC<Props> = ({ movie }) => {
  const [active, setActive] = useState<string>();

  return (
    <article className={styles.Movie}>
      <div className={styles.MovieRow}>
        <div className={styles.MovieButtons}>
          <ArrowButton
            direction={active === movie.id ? 'Up' : 'Down'}
            click={() => {
              setActive(prev => (prev === movie.id ? undefined : movie.id));
            }}
          />
        </div>
        <h3>{movie.title}</h3>
      </div>
      {active === movie.id && <MovieInfo movie={movie} />}
    </article>
  );
};
