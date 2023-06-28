import PropTypes from 'prop-types';
import styles from './styles.module.css';

export const MenuButton = ({ active }) => {
  return (
    <div className={styles.menu_container}>
      <div className={active && styles.fade} />
      <div className={active && styles.rotate_right} />
      <div className={active && styles.fade} />
      <div className={active && styles.rotate_left} />
    </div>
  );
};

MenuButton.propTypes = {
  active: PropTypes.bool
};
