import PropTypes from 'prop-types';
import styles from './task.module.css';
import { Heading4 } from '../typography';

export const TaskList = ({ children, title, total }) => {
  return (
    <section className={styles.container}>
      <section className={styles.title_container}>
        <Heading4>{title}</Heading4>
        <Heading4>({total})</Heading4>
      </section>
      <section className={styles.card_list}>{children}</section>
    </section>
  );
};

TaskList.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
};
