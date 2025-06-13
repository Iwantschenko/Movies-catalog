import { Outlet } from 'react-router';
import './App.scss';
import { useSearchParamsParamsSync } from '@hooks/useSearchParamsSync';
import { useSelector } from 'react-redux';
import type { RootState } from './store/store';

export const App = () => {
  useSearchParamsParamsSync();

  const activeTheme = useSelector(
    (state: RootState) => state.theme.activeTheme,
  );

  document.documentElement.setAttribute('data-theme', activeTheme);

  return (
    <div className="Container">
      <Outlet />
    </div>
  );
};
