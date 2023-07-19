import { useContext } from 'react';
import PropTypes from 'prop-types';
import { MdArchive, MdDeleteForever } from 'react-icons/md';
import styles from './task.module.css';
import { TaskList } from './task-list';
import { getShortDate } from '../../utils';
import { ThemeContext } from '../../contexts';
import { Text } from '../typography';

export const ActiveTaskList = ({ tasks, onArchive, onDelete, onSetActive }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <TaskList title='All Task' total={tasks.length}>
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
            <section className={styles.outer_action_container}>
              <button
                data-theme={theme}
                className={styles.active_button}
                onClick={() => {
                  onSetActive(task);
                }}
              >
                <Text semibold invert>
                  Set to Active
                </Text>
              </button>
              <section className={styles.inner_action_container}>
                <button
                  data-theme={theme}
                  className={styles.action_button}
                  onClick={() => onArchive(task.id)}
                >
                  <MdArchive />
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

ActiveTaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
  onArchive: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onSetActive: PropTypes.func.isRequired,
};
