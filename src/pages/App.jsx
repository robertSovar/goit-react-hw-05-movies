import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import SharedLayout from './SharedLayout';
import Movies from './movies/components/movies/Movies';

export const App = () => {
  return (
    <BrowserRouter>
      <SharedLayout />
      <Routes>
        <Route path="goit-react-hw-05-movies" element={<Home />} />
        <Route path="goit-react-hw-05-movies/movies" element={<Movies />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
