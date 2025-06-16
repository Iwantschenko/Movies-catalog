import React, { useState, useRef } from 'react';
import type { Movie, MoviesFormat } from '@models/Movie';
import styles from './MovieModal.module.scss';
import { DefaultButton } from '../DefaultButton';
import classNames from 'classnames';
import { useLoader } from '@hooks/useLoader';

interface Props {
  isOpen: boolean;
  movie?: Movie;
  onClose: () => void;
  onSubmit: (updated: Movie) => void;
}

export const MovieModalWindow: React.FC<Props> = ({
  isOpen,
  movie = {
    id: '',
    title: '',
    year: 2000,
    format: 'DVD',
    actors: [],
  },
  onClose,
  onSubmit,
}) => {
  const [modalMovie, setModalMovie] = useState<Movie>(movie);
  const actorRef = useRef<HTMLInputElement>(null);
  const { HideLoader, ShowLoader } = useLoader();

  const handleChange = <K extends keyof Movie>(key: K, value: Movie[K]) => {
    setModalMovie(prev => ({ ...prev, [key]: value }));
  };

  const handleAddActor = () => {
    const newActor = actorRef.current?.value.trim();

    if (newActor && !modalMovie.actors.includes(newActor)) {
      setModalMovie(prev => ({
        ...prev,
        actors: [...prev.actors, newActor],
      }));
      actorRef.current!.value = '';
    }
  };

  const handleRemoveActor = (index: number) => {
    setModalMovie(prev => ({
      ...prev,
      actors: prev.actors.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    ShowLoader();
    onSubmit(modalMovie);
    onClose();
    HideLoader();
  };

  if (!isOpen) return null;

  return (
    <div className={classNames(styles.modal, 'no-scroll')}>
      <div className={styles.modalContent}>
        <h2 className={styles.modalTitle}>Edit Movie</h2>

        <form className={styles.modalContentBox} onSubmit={handleSubmit}>
          <label className={styles.modalContentBox}>
            Title:
            <input
              className={styles.modalContentElement}
              type="text"
              value={modalMovie.title}
              onChange={e => handleChange('title', e.target.value)}
            />
          </label>

          <label className={styles.modalContentBox}>
            Year:
            <input
              className={styles.modalContentElement}
              type="number"
              value={modalMovie.year}
              onChange={e => handleChange('year', Number(e.target.value))}
            />
          </label>

          <label className={styles.modalContentBox}>
            Format:
            <select
              className={styles.modalContentElement}
              value={modalMovie.format}
              onChange={e =>
                handleChange('format', e.target.value as MoviesFormat)
              }
            >
              <option value="VHS">VHS</option>
              <option value="DVD">DVD</option>
              <option value="Blu-Ray">Blu-ray</option>
            </select>
          </label>

          <label className={styles.modalContentBox}>
            Add actor:
            <div className={styles.modalContentActor}>
              <input
                className={styles.modalContentElement}
                type="text"
                ref={actorRef}
                placeholder="New actor..."
                onKeyDown={e => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    handleAddActor();
                  }
                }}
              />

              <div className="">
                <DefaultButton type="button" click={handleAddActor}>
                  {' '}
                  add{' '}
                </DefaultButton>
              </div>
            </div>
          </label>

          <div className={styles.modalContentActorList}>
            {modalMovie.actors?.map((actor, i) => (
              <div key={i} className={styles.modalContentActorItem}>
                {actor}
                <button type="button" onClick={() => handleRemoveActor(i)}>
                  ×
                </button>
              </div>
            ))}
          </div>

          <div className={styles.modalActions}>
            <div className="">
              <DefaultButton click={onClose}>Cancel</DefaultButton>
            </div>
            <div className="">
              <DefaultButton type="submit">Save</DefaultButton>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
