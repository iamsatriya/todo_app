import PropTypes from 'prop-types';
import { MdArchive, MdDeleteForever } from 'react-icons/md';
import { Text2 } from '../typography';
import { archiveNote, deleteNote, formatLongDate } from '../../utils';
import styles from './styles.module.css';

export const ActiveTaskItem = ({ task, length, onSetActive }) => {
  const onArchive = async () => {
    const response = await archiveNote(task.id);
    if (!response.error) {
      window.location.reload();
    }
  };

  const onDelete = () => {
    deleteNote(task.id);
  };

  return (
    <article
      className={`${length > 1 ? 'card_not_fullwidth' : 'card_fullwidth'} ${
        styles.card
      }`}
    >
      <Text2>{task.title}</Text2>
      <p>{formatLongDate(new Date(task.createdAt))}</p>
      <p>{task.body}</p>
      <section className={styles.container}>
        <button onClick={() => onSetActive(task)}>Set as Active</button>
        <section className={styles.active_container__inner}>
          <button onClick={onArchive}>
            <MdArchive />
          </button>
          <button onClick={onDelete}>
            <MdDeleteForever />
          </button>
        </section>
      </section>
    </article>
  );
};

ActiveTaskItem.propTypes = {
  task: PropTypes.object.isRequired,
  length: PropTypes.number.isRequired,
  onSetActive: PropTypes.func.isRequired,
};
