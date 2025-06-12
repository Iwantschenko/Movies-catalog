import type { Movie } from '@models/Movie';
import { createSlice } from '@reduxjs/toolkit';

const initialState: Movie[] = [
  {
    id: '1',
    title: 'Blazing Saddles',
    releaseYear: 1974,
    format: 'VHS',
    stars: [
      'Mel Brooks',
      'Clevon Little',
      'Harvey Korman',
      'Gene Wilder',
      'Slim Pickens',
      'Madeline Kahn',
    ],
  },
  {
    id: '2',
    title: 'Casablanca',
    releaseYear: 1942,
    format: 'DVD',
    stars: ['Humphrey Bogart', 'Ingrid Bergman', 'Claude Rains', 'Peter Lorre'],
  },
  {
    id: '3',
    title: 'Charade',
    releaseYear: 1953,
    format: 'DVD',
    stars: [
      'Audrey Hepburn',
      'Cary Grant',
      'Walter Matthau',
      'James Coburn',
      'George Kennedy',
    ],
  },
  {
    id: '4',
    title: 'Cool Hand Luke',
    releaseYear: 1967,
    format: 'VHS',
    stars: ['Paul Newman', 'George Kennedy', 'Strother Martin'],
  },
  {
    id: '5',
    title: 'Butch Cassidy and the Sundance Kid',
    releaseYear: 1969,
    format: 'VHS',
    stars: ['Paul Newman', 'Robert Redford', 'Katherine Ross'],
  },
];

const moviesSlice = createSlice({
  name: 'movieSlice',
  initialState,
  reducers: {},
});

export default moviesSlice;
