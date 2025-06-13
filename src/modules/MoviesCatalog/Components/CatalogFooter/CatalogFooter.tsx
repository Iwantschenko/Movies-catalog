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
}
const PER_PAGE = 2;

export const CatalogFooter: React.FC<Props> = ({ moviesCount }) => {
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
    return Math.ceil(moviesCount / PER_PAGE);
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
            isSelected={sort === 'asc'}
            click={() => updateSort('asc')}
          >
            sort by ASC
          </DefaultButton>
        </div>
        <div className={styles.FooterButtons}>
          <DefaultButton
            isSelected={sort === 'desc'}
            click={() => updateSort('desc')}
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
