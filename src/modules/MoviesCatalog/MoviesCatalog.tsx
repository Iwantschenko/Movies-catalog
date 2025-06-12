import { CatalogHeader } from './Components/CatalogHeader';
import styles from './MoviesCatalog.module.scss';

export const MoviesCatalog = () => {
  // const selector = useSelector((state: RootState) => state.movieSlice);

  return (
    <section className={styles.Catalog}>
      <CatalogHeader />
      <article className={styles.CatalogContent}>Main</article>
      <article className={styles.CatalogFooter}>Footer</article>
    </section>
  );
};
