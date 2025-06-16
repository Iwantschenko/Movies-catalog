import { MovieList } from '../_shared/MovieList';
import { CatalogHeader } from './Components/CatalogHeader';
import styles from './MoviesCatalog.module.scss';
import { CatalogFooter } from './Components/CatalogFooter';
import { useMovies } from '@hooks/useMovies';
import { DefaultButton } from '@modules/_shared/DefaultButton';
import { useModal } from '@hooks/useModal';
import { MovieModalWindow } from '@modules/_shared/MovieModal';
import { ImportMovies } from '@modules/_shared/ImportMovie';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '@store/store';
import { getMovieThunk } from '@store/asyncThunk/getMovieThunk';

export const MoviesCatalog = () => {
  const { movies, total, AddMovie, importMovies } = useMovies();
  const { openModal, modal, closeModal } = useModal();
  const { page, sort } = useSelector((state: RootState) => state.searchParams);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getMovieThunk());
  }, [page, sort]);

  return (
    <section className={styles.Catalog}>
      <div className={styles.CatalogHeader}>
        <h1>Movies Catalog</h1>
        <ImportMovies onUpload={importMovies} />
        <div>
          <DefaultButton click={() => openModal('addMovie')}>
            Add new movies
          </DefaultButton>
        </div>
      </div>
      <CatalogHeader />

      <article className={styles.CatalogContent}>
        {movies.length === 0 ? (
          <h4 className="">0 movies</h4>
        ) : (
          <MovieList movies={movies} />
        )}
      </article>

      <CatalogFooter moviesCount={total} perPage={5} />

      <MovieModalWindow
        isOpen={modal === 'addMovie'}
        onClose={closeModal}
        onSubmit={movie => AddMovie(movie)}
      />
    </section>
  );
};
