// import PropTypes from 'prop-types';
import { MdArchive, MdDeleteForever } from 'react-icons/md';
import { formatLongDate, getArchivedNotes } from '../../utils';
import { Heading4, Text2 } from '../typography';
import styles from './styles.module.css';
import { useEffect, useState } from 'react';

export const ArchivedTaskList = () => {
  const [task, setTask] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getArchivedNotes();
        setTask(response.data);
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, []);

  return (
    <section className={styles.task_container}>
      <section className={styles.task_container__header}>
        <Heading4>Archived Task</Heading4>
        <Text2>( {task && task.length} )</Text2>
      </section>
      <section className={styles.list_container}>
        {task && task.length ? (
          task.map((note) => (
            <article key={note.id} style={{ minWidth: task.length > 1 ? '80%' : '100%' }}>
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

ArchivedTaskList.propTypes = {};
