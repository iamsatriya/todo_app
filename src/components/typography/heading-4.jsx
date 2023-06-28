import PropTypes from 'prop-types';
import styles from './styles.module.css';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts';

export const Heading4 = ({ children, invert }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <h4 data-theme={theme} className={`${styles.h4} ${invert && styles.invert}`}>
      {children}
    </h4>
  );
};

Heading4.propTypes = {
  children: PropTypes.node.isRequired,
  invert: PropTypes.bool
};
