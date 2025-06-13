import { useRef, useState } from 'react';
import styles from './CatalogHeader.module.scss';
import removeIcons from '@assets/icons/remove-icon.png';
import classNames from 'classnames';
import { useSearchParams } from 'react-router-dom';

export const CatalogHeader = () => {
  const inputElement = useRef<HTMLInputElement>(null);
  const debounceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [value, setValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const updateQuery = (query: string) => {
    searchParams.set('query', query);
    setSearchParams(searchParams);
  };

  const handleClear = () => {
    setValue('');
    updateQuery('');
    inputElement.current?.focus();
  };

  const onChange = (inputText: string) => {
    setValue(inputText);

    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }

    debounceTimer.current = setTimeout(() => {
      if (inputText === '') {
        handleClear();

        return;
      }

      setValue(inputText.trim());
      updateQuery(inputText.trim());
    }, 500);
  };

  return (
    <header className={styles.CatalogHeader}>
      <form onSubmit={handleOnSubmit} className={styles.HeaderForm}>
        <input
          ref={inputElement}
          type="text"
          value={value}
          onChange={e => onChange(e.target.value)}
          className={styles.HeaderSearchInput}
          placeholder="Enter your query here?"
        />

        {value && (
          <button
            type="button"
            onClick={handleClear}
            className={classNames(styles.HeaderRemoveButton, 'buttonText')}
          >
            <img src={removeIcons} alt="remove" />
          </button>
        )}
      </form>
    </header>
  );
};
