import React from 'react';
import styles from './ArrowButton.module.scss';
import cn from 'classnames';
import type { ArrowDirection } from '@models/ArrowDirection';

interface Props {
  direction?: ArrowDirection;
  isDisabled?: boolean;
  click?: () => void;
}

export const ArrowButton: React.FC<Props> = ({
  direction = 'Up',
  isDisabled = false,
  click,
}) => {
  return (
    <button
      className={cn(
        styles.arrow,
        styles[`arrow${direction}`],
        styles.arrowButton,
        {
          [styles.arrowDisabled]: isDisabled,
          [styles.arrowButtonDisabled]: isDisabled,
        },
      )}
      disabled={isDisabled}
      onClick={click}
    ></button>
  );
};
