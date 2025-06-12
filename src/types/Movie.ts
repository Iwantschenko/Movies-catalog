export type MoviesFormat = 'VHS' | 'DVD' | 'Blu-ray';

export interface Movie {
  id: string;
  title: string;
  releaseYear: number;
  format: MoviesFormat;
  stars: string[];
}
