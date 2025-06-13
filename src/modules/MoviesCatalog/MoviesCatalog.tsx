import { useSelector } from 'react-redux';
import { MovieList } from '../_shared/MovieList';
import { CatalogHeader } from './Components/CatalogHeader';
import styles from './MoviesCatalog.module.scss';
import type { RootState } from 'src/store/store';
import { CatalogFooter } from './Components/CatalogFooter';

export const MoviesCatalog = () => {
  const selector = useSelector((state: RootState) => state.movieSlice);

  return (
    <section className={styles.Catalog}>
      <h1>Movies Catalog</h1>

      <CatalogHeader />

      <article className={styles.CatalogContent}>
        <MovieList movies={selector} />
      </article>

      <CatalogFooter moviesCount={selector.length} />
    </section>
  );
};
