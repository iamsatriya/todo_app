import PropTypes from 'prop-types';
import { MdArchive, MdDeleteForever } from 'react-icons/md';
import { formatLongDate } from '../../utils';
import { Heading4, Text2 } from '../typography';
import styles from './styles.module.css';

export const ListBase = ({ title, list }) => {
  return (
    <section className={styles.task_container}>
      <section className={styles.task_container__header}>
        <Heading4>{title}</Heading4>
        <Text2>( {list && list.length} )</Text2>
      </section>
      <section className={styles.list_container}>
        {list && list.length ? (
          list.map((note) => (
            <article key={note.id} style={{ minWidth: list.length > 1 ? '80%' : '100%' }}>
              <Text2>{note.title}</Text2>
              <p>{formatLongDate(new Date(note.createdAt))}</p>
              <p>{note.body}</p>
              <section className={styles.active_task_action_container}>
                <button>Set as Active</button>
                <section className={styles.active_task_action_container__inner}>
                  <button>
                    <MdArchive />
                  </button>
                  <button>
                    <MdDeleteForever />
                  </button>
                </section>
              </section>
            </article>
          ))
        ) : (
          <p>No task</p>
        )}
      </section>
    </section>
  );
};

ListBase.propTypes = {
  title: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.object).isRequired
};
