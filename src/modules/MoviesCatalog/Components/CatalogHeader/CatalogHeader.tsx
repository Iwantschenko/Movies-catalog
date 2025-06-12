import { useRef, useState } from 'react';
import styles from './CatalogHeader.module.scss';
import removeIcons from '@assets/icons/remove-icon.png';

export const CatalogHeader = () => {
  const inputElement = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState('');

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleClear = () => {
    setValue('');
    inputElement.current?.focus();
  };

  return (
    <article className={styles.CatalogHeader}>
      <form onSubmit={handleOnSubmit} className={styles.HeaderForm}>
        <input
          ref={inputElement}
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
          className={styles.HeaderSearchInput}
          placeholder="Enter your query here?"
        />

        {value && (
          <button
            type="button"
            onClick={handleClear}
            className={styles.HeaderRemoveButton}
          >
            <img src={removeIcons} alt="remove" />
          </button>
        )}
      </form>
    </article>
  );
};
