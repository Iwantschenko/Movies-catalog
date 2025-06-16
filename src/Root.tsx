import { HashRouter, Navigate, Route, Routes } from 'react-router';
import { App } from './App';
import { MoviesCatalog } from './modules/MoviesCatalog';

export const Root = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<MoviesCatalog />} />
          <Route path="/home" element={<Navigate to="/" replace={true} />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};
