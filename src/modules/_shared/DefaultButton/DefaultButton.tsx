import type { ReactNode } from 'react';
import styles from './DefaultButton.module.scss';
import cn from 'classnames';

interface Props {
  isSelected?: boolean;
  click?: () => void;
  children: ReactNode | ReactNode[];
}

export const DefaultButton: React.FC<Props> = ({
  isSelected = false,
  click,
  children,
}) => {
  return (
    <button
      className={cn('buttonText', styles.defaultButton, {
        [styles.defaultButtonSelected]: isSelected,
      })}
      onClick={click}
      disabled={isSelected}
    >
      {children}
    </button>
  );
};
