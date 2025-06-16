import type { ReactNode } from 'react';
import styles from './DefaultButton.module.scss';
import cn from 'classnames';

interface Props {
  isSelected?: boolean;
  click?: () => void;
  type?: 'button' | 'submit' | 'reset';
  children: ReactNode | ReactNode[];
}

export const DefaultButton: React.FC<Props> = ({
  isSelected = false,
  type = 'button',
  click,
  children,
}) => {
  return (
    <button
      type={type}
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
