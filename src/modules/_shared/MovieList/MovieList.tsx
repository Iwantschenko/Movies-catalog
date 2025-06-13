import type { Movie } from '@models/Movie';
import { MovieInfo } from '../MovieInfo';
import styles from './MovieList.module.scss';
interface Props {
  movies: Movie[];
}

export const MovieList: React.FC<Props> = ({ movies }) => {
  return (
    <div className={styles.CatalogList}>
      {movies.map(item => (
        <MovieInfo key={item.id} movie={item} />
      ))}
    </div>
  );
};
