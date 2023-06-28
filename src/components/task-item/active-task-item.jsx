import PropTypes from 'prop-types';
import { MdArchive, MdDeleteForever } from 'react-icons/md';
import { Text2 } from '../typography';
import { formatLongDate } from '../../utils';
import styles from './styles.module.css';

export const ActiveTaskItem = ({ task, length }) => {
  return (
    <article style={{ minWidth: length > 1 ? '80%' : '100%' }}>
      <Text2>{task.title}</Text2>
      <p>{formatLongDate(new Date(task.createdAt))}</p>
      <p>{task.body}</p>
      <section className={styles.hehe} style={{ backgroundColor: 'red' }}>
        <button>Set as Active</button>
        <section className={styles.hehe__inner}>
          <button>
            <MdArchive />
          </button>
          <button>
            <MdDeleteForever />
          </button>
        </section>
      </section>
    </article>
  );
};

ActiveTaskItem.propTypes = {
  task: PropTypes.object.isRequired,
  length: PropTypes.number.isRequired
};
