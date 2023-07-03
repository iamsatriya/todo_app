import PropTypes from 'prop-types';
import { Heading4, Text2 } from '../typography';
import styles from './styles.module.css';
import { ActiveTaskItem, ArchivedTaskItem } from '../task-item';

export const ListBase = ({
  title,
  list,
  isActiveList,
  isArchivedList,
  onSetActive,
}) => {
  return (
    <section className={styles.task_container}>
      <section className={styles.task_container__header}>
        <Heading4>{title}</Heading4>
        <Text2>( {list && list.length} )</Text2>
      </section>
      <section className={styles.list_container}>
        {list && list.length ? (
          list.map((task) => {
            if (isActiveList)
              return (
                <ActiveTaskItem
                  key={task.id}
                  task={task}
                  length={list.length}
                  onSetActive={onSetActive ? onSetActive : () => {}}
                />
              );
            if (isArchivedList)
              return (
                <ArchivedTaskItem
                  key={task.id}
                  task={task}
                  length={list.length}
                />
              );
          })
        ) : (
          <p>No task</p>
        )}
      </section>
    </section>
  );
};

ListBase.propTypes = {
  title: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  isActiveList: PropTypes.bool,
  isArchivedList: PropTypes.bool,
  onSetActive: PropTypes.func,
};
