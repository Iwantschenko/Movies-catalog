import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';

import styles from './ThemeSwitcher.module.scss';
import sun from '@assets/icons/sun-icon.png';
import moon from '@assets/icons/moon-icon.png';
import type { RootState } from '@store/store';
import { toggleTheme } from '@store/slices/themeSlice';

export const ThemeSwitcher = () => {
  const { activeTheme } = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();
  const isDark = activeTheme === 'dark';

  return (
    <button
      onClick={() => dispatch(toggleTheme())}
      aria-label="Toggle theme"
      className={classNames(styles.themeSwitcher)}
    >
      <img
        className={styles.themeSwitcherIcon}
        src={isDark ? sun : moon}
        alt="Switch theme"
      />
    </button>
  );
};
