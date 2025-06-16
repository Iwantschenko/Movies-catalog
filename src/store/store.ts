import { configureStore } from '@reduxjs/toolkit';
import moviesSlice from './slices/moviesSlice';
import searchParamsSlice from './slices/searchParamsSlice';
import themeSlice from './slices/themeSlice';
import modalSlice from './slices/modalSlice';
import loaderSlice from './slices/loaderSlice';

const store = configureStore({
  reducer: {
    [moviesSlice.name]: moviesSlice.reducer,
    [searchParamsSlice.name]: searchParamsSlice.reducer,
    [themeSlice.name]: themeSlice.reducer,
    [modalSlice.name]: modalSlice.reducer,
    [loaderSlice.name]: loaderSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
