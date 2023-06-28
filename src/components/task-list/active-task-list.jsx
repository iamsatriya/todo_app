import { getActiveNotes } from '../../utils';
import { useEffect, useState } from 'react';
import { ListBase } from './list-base';

export const ActiveTaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getActiveNotes();
        setTasks(response.data);
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, []);

  return (
    <ListBase list={tasks} title="Active Task" />
    // <section className={styles.task_container}>
    //   <section className={styles.task_container__header}>
    //     <Heading4>All Task</Heading4>
    //     <Text2>( {tasks && tasks.length} )</Text2>
    //   </section>
    //   <section className={styles.list_container}>
    //     {tasks && tasks.length ? (
    //       tasks.map((task) => <ActiveTaskItem key={task.id} task={task} length={task.length} />)
    //     ) : (
    //       <p>No task</p>
    //     )}
    //   </section>
    // </section>
  );
};

ActiveTaskList.propTypes = {};
