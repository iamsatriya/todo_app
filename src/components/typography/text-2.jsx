import PropTypes from 'prop-types';
import styles from './styles.module.css';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts';

export const Text2 = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <p data-theme={theme} className={styles.text2}>
      {children}
    </p>
  );
};

Text2.propTypes = {
  children: PropTypes.node.isRequired
};
