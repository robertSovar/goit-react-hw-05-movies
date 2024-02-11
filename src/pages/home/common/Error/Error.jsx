import React from 'react';
import styles from './Error.module.css';
import PropTypes from 'prop-types';

const Error = ({ message }) => {
  return <div className={styles.alert}>{message}</div>;
};

Error.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Error;
