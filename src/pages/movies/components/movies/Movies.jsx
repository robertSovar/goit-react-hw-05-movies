import styles from './Movies.module.css';

const Movies = () => {
  return (
    <form className={styles.form}>
      <input type="text" placeholder="Search movie" className={styles.input} />
    </form>
  );
};

export default Movies;
