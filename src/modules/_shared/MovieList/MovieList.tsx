import type { Movie } from '@models/Movie';
import styles from './MovieList.module.scss';
import { MovieItem } from '../MovieItem';
interface Props {
  movies: Movie[];
}

export const MovieList: React.FC<Props> = ({ movies }) => {
  return (
    <div className={styles.CatalogList}>
      {movies.map(item => (
        <MovieItem key={item.id} movie={item} />
      ))}
    </div>
  );
};
