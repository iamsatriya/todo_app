import { Link, useLoaderData } from 'react-router-dom';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import styles from './tasks.module.css';
import { Heading3, Text } from '../../components';
import { getShortDate } from '../../utils';

export const TasksDetail = () => {
  const { task } = useLoaderData();
  console.log(task);
  if (!task || task.error) {
    throw new Response('', {
      status: 404,
      statusText: 'Task Not Found',
    });
  }
  const { title, body, createdAt } = task.data;
  return (
    <section>
      <header className={styles.task_detail_header}>
        <Link to='/'>
          <MdOutlineArrowBackIosNew className={styles.back_button} />
        </Link>
      </header>
      <section className={styles.detail_container}>
        <section className={styles.task_detail_container}>
          <Heading3>{title}</Heading3>
          <Text light>{getShortDate(new Date(createdAt))}</Text>
          <Text>{body}</Text>
        </section>
      </section>
    </section>
  );
};
