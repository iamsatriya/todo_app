import PropTypes from 'prop-types';
import styles from './styles.module.css';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts';

export const ButtonPrimary = ({ children, type, fullWidth }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <button
      data-theme={theme}
      type={type ? type : 'submit'}
      className={`${styles.primary} ${fullWidth && styles.fullwidth}`}
    >
      {children}
    </button>
  );
};

ButtonPrimary.propTypes = {
  children: PropTypes.node.isRequired,
  fullWidth: PropTypes.bool,
  type: PropTypes.string
};
