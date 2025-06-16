import type { SortOrder } from '@models/SearchParamsStateType';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { setParams } from '../store/slices/searchParamsSlice';

export const useSearchParamsParamsSync = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const query = searchParams.get('query') ?? null;
    const sort = (searchParams.get('sort') as SortOrder) ?? 'ASC';
    const page = Number(searchParams.get('page')) || 1;

    const newParams = new URLSearchParams();

    if (query) newParams.set('query', query);
    if (sort !== 'ASC') newParams.set('sort', sort);
    if (page !== 1) newParams.set('page', page.toString());

    const newQueryString = newParams.toString();
    const currentQueryString = searchParams.toString();

    if (newQueryString !== currentQueryString) {
      navigate(
        { search: newQueryString ? `?${newQueryString}` : '' },
        { replace: true },
      );
    }

    dispatch(setParams({ query, sort, page }));
  }, [searchParams]);
};
