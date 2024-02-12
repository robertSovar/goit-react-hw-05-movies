import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import styles from './Layout.module.css';

export const Layout = () => {
  return (
    <div className={styles.containerLayout}>
      <header className={styles.layoutHeader}>
        <nav>
          <NavLink className={styles.layoutTitle} to="/" end>
            Home
          </NavLink>
          <NavLink className={styles.layoutTitle} to="/movies">
            Movies
          </NavLink>
        </nav>
      </header>

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
