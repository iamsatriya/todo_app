import PropTypes from 'prop-types';
import styles from './typography.module.css';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts';

export const Heading3 = ({ children, invert }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <h3
      data-theme={theme}
      className={`${invert && styles.invert} ${styles.h1}`}
    >
      {children}
    </h3>
  );
};

Heading3.propTypes = {
  children: PropTypes.node.isRequired,
  invert: PropTypes.bool,
};
