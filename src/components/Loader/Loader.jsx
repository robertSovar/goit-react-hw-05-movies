import { BallTriangle } from 'react-loader-spinner';
import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.loaderContainer}>
      <BallTriangle
        height="100"
        width="100"
        color="tomato"
        ariaLabel="loading"
      />
    </div>
  );
};

export default Loader;
