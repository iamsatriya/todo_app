import PropTypes from 'prop-types';
import styles from './toast.module.css';

export const Toast = ({ text, isShowToast }) => {
  return (
    <>
      {isShowToast && (
        <div className={styles.toast_container}>
          <p className={styles.toast_text_container}>
            {text || 'Please wait ...'}
          </p>
        </div>
      )}
    </>
  );
};

Toast.propTypes = {
  text: PropTypes.string,
  isShowToast: PropTypes.bool.isRequired,
};
