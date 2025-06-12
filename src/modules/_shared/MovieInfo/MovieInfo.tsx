import type { Movie } from '@models/Movie';
import { useState } from 'react';
import styles from './MovieInfo.module.scss';

interface Props {
  movie: Movie;
}

export const MovieInfo: React.FC<Props> = ({ movie }) => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <article className={styles.MovieInfo}>
      <div className={styles.button}>
        <a onClick={() => toggle(movie.id)}>{movie.title}</a>
      </div>

      {openId === movie.id && (
        <div className={styles.details}>
          <h2 className={styles.title}>{movie.title}</h2>
          <p className={styles.text}>
            <strong>Release Year:</strong> {movie.releaseYear}
          </p>
          <p className={styles.text}>
            <strong>Format:</strong> {movie.format}
          </p>
          <div className={styles.actors}>
            <strong>Actors:</strong>
            <ul>
              {movie.stars.map((actor, idx) => (
                <li key={idx}>{actor}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </article>
  );
};
