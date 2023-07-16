import PropTypes from 'prop-types';
import styles from './typography.module.css';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts';

export const Heading4 = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <h4 data-theme={theme} className={styles.h4}>
      {children}
    </h4>
  );
};

Heading4.propTypes = {
  children: PropTypes.node.isRequired,
};
