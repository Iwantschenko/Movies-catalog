import type { Movie } from '@models/Movie';
import styles from './MovieInfo.module.scss';

interface Props {
  movie: Movie;
}

export const MovieInfo: React.FC<Props> = ({ movie }) => {
  return (
    <div className={styles.MovieInfo}>
      <h4 className="">
        Title: <span className={styles.MovieInfoText}>{movie.title}</span>
      </h4>
      <h4 className="">
        Year of publication:
        <span className={styles.MovieInfoText}>{movie.releaseYear}</span>
      </h4>
      <h4 className="">
        Video Format :
        <span className={styles.MovieInfoText}>{movie.format}</span>
      </h4>
      <h4 className="">
        Actors:
        <div className={styles.MovieInfoActorColumns}>
          {movie.stars.map((actor, i) => (
            <div key={i} className={styles.MovieInfoText}>
              {actor}
            </div>
          ))}
        </div>
      </h4>
    </div>
  );
};
