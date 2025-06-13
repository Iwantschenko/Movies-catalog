import type { Movie } from '@models/Movie';
import styles from './MovieInfo.module.scss';
import { ArrowButton } from '../ArrowButton';

interface Props {
  movie: Movie;
}

export const MovieInfo: React.FC<Props> = ({ movie }) => {
  return (
    <article className={styles.MovieInfo}>
      <div className={styles.MovieInfoRow}>
        <div className={styles.MovieInfoButtons}>
          <ArrowButton direction="Down" click={() => {}} />
        </div>
        <h3 className={styles.MovieInfomovieTitle}>{movie.title}</h3>
      </div>
    </article>
  );
};
