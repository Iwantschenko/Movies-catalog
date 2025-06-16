import type { SortOrder } from '@models/SearchParamsStateType';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import type { RootState } from 'src/store/store';
import styles from './CatalogFooter.module.scss';
import { DefaultButton } from '@modules/_shared/DefaultButton';
import { ThemeSwitcher } from '@modules/_shared/ThemeSwitcher';
import { PaginationButtons } from '../PaginationButtons';

interface Props {
  moviesCount: number;
  perPage: number;
}

export const CatalogFooter: React.FC<Props> = ({ moviesCount, perPage }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { page, sort } = useSelector((state: RootState) => state.searchParams);

  const updateSort = (sort: SortOrder) => {
    searchParams.set('sort', sort);
    setSearchParams(searchParams);
  };

  const updatePage = (newPage: number) => {
    searchParams.set('page', newPage.toString());
    setSearchParams(searchParams);
  };

  const getPagesCount = () => {
    return Math.ceil(moviesCount / perPage);
  };

  return (
    <footer className={styles.Footer}>
      <div className={styles.FooterContainer}>
        <ThemeSwitcher />
        <span className="todo-count" data-cy="TodosCounter">
          {moviesCount} item{moviesCount !== 1 && 's'} left
        </span>
      </div>
      <div className={styles.FooterContainer}>
        <div className={styles.FooterButtons}>
          <DefaultButton
            isSelected={sort === 'ASC'}
            click={() => updateSort('ASC')}
          >
            sort by ASC
          </DefaultButton>
        </div>
        <div className={styles.FooterButtons}>
          <DefaultButton
            isSelected={sort === 'DESC'}
            click={() => updateSort('DESC')}
          >
            sort by desc
          </DefaultButton>
        </div>
      </div>
      <PaginationButtons
        currentPage={page}
        totalPages={getPagesCount()}
        onPageChange={updatePage}
      />
    </footer>
  );
};
