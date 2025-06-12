import type { Movie } from '@models/Movie';
import { MovieInfo } from '../MovieInfo';

interface Props {
  movies: Movie[];
}

export const MovieList: React.FC<Props> = ({ movies }) => {
  return (
    <div className="">
      {movies.map(item => (
        <MovieInfo key={item.id} movie={item} />
      ))}
    </div>
  );
};
