import { NavLink, Outlet } from 'react-router-dom';
import styles from './SharedLayout.module.css';
import { Suspense } from 'react';

const SharedLayout = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <NavLink
          className={({ isActive }) => (isActive ? styles.isActive : '')}
          to={'goit-react-hw-05-movies'}
        >
          Home
        </NavLink>
        <NavLink
          to={'goit-react-hw-05-movies/movies'}
          className={({ isActive }) => (isActive ? styles.isActive : '')}
        >
          Movies
        </NavLink>
      </div>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
