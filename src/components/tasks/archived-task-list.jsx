import { useContext } from 'react';
import PropTypes from 'prop-types';
import { MdUnarchive, MdDeleteForever } from 'react-icons/md';
import styles from './task.module.css';
import { TaskList } from './task-list';
import { getShortDate } from '../../utils';
import { ThemeContext } from '../../contexts';
import { Text } from '../typography';

export const ArchivedTaskList = ({ tasks, onUnarchive, onDelete }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <TaskList title='Archived Task' total={tasks.length}>
      {tasks.map((task) => {
        return (
          <section key={task.id} className={styles.card_container}>
            <section>
              <Text semibold>{task.title}</Text>
              <Text light>{getShortDate(new Date(task.createdAt))}</Text>
              <section data-theme={theme} className={styles.body_container}>
                <p>{task.body}</p>
              </section>
            </section>
            <section className={styles.archived_outer_action_container}>
              <section className={styles.inner_action_container}>
                <button
                  data-theme={theme}
                  className={styles.action_button}
                  onClick={() => onUnarchive(task.id)}
                >
                  <MdUnarchive />
                </button>
                <button
                  data-theme={theme}
                  className={styles.action_button}
                  onClick={() => onDelete(task.id)}
                >
                  <MdDeleteForever />
                </button>
              </section>
            </section>
          </section>
        );
      })}
    </TaskList>
  );
};

ArchivedTaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
  onUnarchive: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};
