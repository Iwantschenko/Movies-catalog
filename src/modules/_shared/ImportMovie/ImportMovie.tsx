import React, { useState } from 'react';
import { DefaultButton } from '../DefaultButton';
import styles from './ImportMovie.module.scss';

interface Props {
  onUpload: (file: File) => void;
}

export const ImportMovies: React.FC<Props> = ({ onUpload }) => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files?.[0] || null);
  };

  const handleUpload = () => {
    if (!file) return;
    onUpload(file);
  };

  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Import Movies (.txt)</h3>

      <label className={styles.fileLabel}>
        <input
          type="file"
          accept=".txt"
          onChange={handleFileChange}
          className={styles.fileInput}
        />
        {file?.name || 'Choose file'}
      </label>

      <DefaultButton click={handleUpload} isSelected={!file}>
        Upload
      </DefaultButton>
    </div>
  );
};
