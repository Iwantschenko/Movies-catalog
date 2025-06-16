export type MoviesFormat = 'VHS' | 'DVD' | 'Blu-Ray';

export interface Movie {
  id: string;
  title: string;
  year: number;
  format: MoviesFormat;
  actors: string[];
}
