import { configureStore } from '@reduxjs/toolkit';
import moviesSlice from './moviesSlice';
import searchParamsSlice from './searchParamsSlice';
import themeSlice from './themeSlice';

const store = configureStore({
  reducer: {
    [moviesSlice.name]: moviesSlice.reducer,
    [searchParamsSlice.name]: searchParamsSlice.reducer,
    [themeSlice.name]: themeSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
