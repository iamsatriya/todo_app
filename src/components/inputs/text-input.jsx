import PropTypes from 'prop-types';
import styles from './styles.module.css';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts';

export const TextInput = ({ id, label, placeholder, type }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <label data-theme={theme} htmlFor={id || label} className={styles.label}>
        {label}
      </label>
      <input
        data-theme={theme}
        id={id || label}
        type={type}
        placeholder={placeholder}
        className={styles.input}
      />
    </>
  );
};

TextInput.propTypes = {
  id: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
};
