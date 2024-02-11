import { useEffect, useState } from 'react';
import FetchPopularMovies from './home/components/data/FetchPopularMovies';
import { NavLink } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const results = await FetchPopularMovies();
        setData(results);
      } catch (error) {
        console.error('Error fetching popular movies:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1 className={styles.title}>Popular movies for today</h1>

      <ul>
        {data.map(movie => {
          return (
            <NavLink
              to={'/goit-react-hw-05-movies/movie'}
              key={movie.id}
              className={styles.navActive}
            >
              <li className={styles.active} key={movie.id}>
                {movie.title}
              </li>
            </NavLink>
          );
        })}
      </ul>
    </>
  );
};

export default Home;
