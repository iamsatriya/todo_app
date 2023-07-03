import PropTypes from 'prop-types';
import { MdUnarchive, MdDeleteForever } from 'react-icons/md';
import { Text2 } from '../typography';
import { deleteNote, formatLongDate, unarchiveNote } from '../../utils';
import styles from './styles.module.css';

export const ArchivedTaskItem = ({ task, length }) => {
  const onUnarchive = async () => {
    const response = await unarchiveNote(task.id);
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
        <section className={styles.archived_container__inner}>
          <button onClick={onUnarchive}>
            <MdUnarchive />
          </button>
          <button onClick={onDelete}>
            <MdDeleteForever />
          </button>
        </section>
      </section>
    </article>
  );
};

ArchivedTaskItem.propTypes = {
  task: PropTypes.object.isRequired,
  length: PropTypes.number.isRequired,
};
