import type { Movie } from '@models/Movie';
import styles from './MovieInfo.module.scss';
import { DefaultButton } from '../DefaultButton';

interface Props {
  movie: Movie;
  onEdit: (movie: Movie) => void;
  onDelete: (movie: Movie) => void;
}

export const MovieInfo: React.FC<Props> = ({ movie, onEdit, onDelete }) => {
  return (
    <div className={styles.MovieInfo}>
      <h4>
        Title: <span className={styles.MovieInfoText}>{movie.title}</span>
      </h4>

      <h4>
        Year of publication:{' '}
        <span className={styles.MovieInfoText}>{movie.year}</span>
      </h4>

      <h4>
        Video Format:{' '}
        <span className={styles.MovieInfoText}>{movie.format}</span>
      </h4>

      <h4>
        Actors:
        <div className={styles.MovieInfoActorColumns}>
          {movie.actors?.map((actor, i) => (
            <div key={actor + i} className={styles.MovieInfoText}>
              {actor}
            </div>
          ))}
        </div>
      </h4>

      <div className={styles.MovieInfoActions}>
        <div className="">
          <DefaultButton click={() => onEdit(movie)}>Edit</DefaultButton>
        </div>
        <div className="">
          <DefaultButton click={() => onDelete(movie)}>Delete</DefaultButton>
        </div>
      </div>
    </div>
  );
};
