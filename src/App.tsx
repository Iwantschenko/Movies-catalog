import { Outlet } from 'react-router';
import './App.scss';
import { useSearchParamsParamsSync } from '@hooks/useSearchParamsSync';
import { useModal } from '@hooks/useModal';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '@store/store';
import { Loader } from '@modules/_shared/Loader';
import { useLoader } from '@hooks/useLoader';

export const App = () => {
  useSearchParamsParamsSync();
  const { modal } = useModal();
  const { isLoading } = useLoader();
  const activeTheme = useSelector(
    (state: RootState) => state.theme.activeTheme,
  );

  document.documentElement.setAttribute('data-theme', activeTheme);

  useEffect(() => {
    document.body.classList.toggle('no-scroll', modal !== null);
  }, [modal]);

  return (
    <div className="Container">
      {isLoading && (
        <div>
          <Loader />
        </div>
      )}
      <Outlet />
    </div>
  );
};
