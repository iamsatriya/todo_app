import PropTypes from 'prop-types';
import styles from './typography.module.css';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts';

export const Text = ({ children, semibold, light }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <p
      data-theme={theme}
      className={`${styles.text}${semibold ? ' ' + styles.semibold : ''}${
        light ? ' ' + styles.light : ''
      }`}
    >
      {children}
    </p>
  );
};

Text.propTypes = {
  children: PropTypes.node.isRequired,
  semibold: PropTypes.bool,
  light: PropTypes.bool,
};
