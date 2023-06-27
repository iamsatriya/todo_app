import PropTypes from 'prop-types';
import styles from './styles.module.css';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts';

export const ButtonPrimary = ({ children, type, fullWidth, onClick }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <button
      data-theme={theme}
      type={type ? type : 'submit'}
      className={`${styles.primary} ${fullWidth && styles.fullwidth}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

ButtonPrimary.propTypes = {
  children: PropTypes.node.isRequired,
  fullWidth: PropTypes.bool,
  type: PropTypes.string,
  onClick: PropTypes.func
};
