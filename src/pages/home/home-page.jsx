import { useContext, useEffect, useState } from 'react';
import {
  ActivatedTaskItem,
  ActiveTaskList,
  ArchivedTaskList,
  Heading1,
  MenuButton,
  PrimaryButton,
  Text2,
} from '../../components';
import Logo from '../../assets/images/logo-small.svg';
import { formatDay, formatLongDate, getUserLogged, putStartTime } from '../../utils';
import { ThemeContext } from '../../contexts';
import styles from './styles.module.css';

export const HomePage = () => {
  const { theme } = useContext(ThemeContext);

  const [user, setUser] = useState();

  const [filter, setFilter] = useState('');

  const [activeTask, setActiveTask] = useState();

  const onSetActive = (task) => {
    const timeNow = new Date();
    putStartTime(timeNow);
    setActiveTask(task);
  };

  const onSetDeactive = () => {
    setActiveTask(undefined);
  };

  const date = new Date();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getUserLogged();
        setUser(response.data);
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <header className={styles.header_container}>
        <img src={Logo} />
        <MenuButton />
      </header>
      <main>
        {/* heading main section */}
        <section className={styles.main_heading_container}>
          {/* left and top  */}
          <section className={styles.welcome_container}>
            <Heading1>Good Morning, {user && user.name}!</Heading1>
            <Text2>Today is {formatDay(date)}</Text2>
            <p>{formatLongDate(date)}</p>
            <section className={styles.new_task_container}>
              <PrimaryButton fullWidth>+ Add New Task</PrimaryButton>
            </section>
          </section>
          {/* right and bottom */}
          <section>
            {activeTask ? (
              <ActivatedTaskItem
                task={activeTask}
                onDeactivate={onSetDeactive}
              />
            ) : (
              <section data-theme={theme} className={styles.no_task_container}>
                <Text2>You have no active task :(</Text2>
              </section>
            )}
          </section>
        </section>
        <section>
          <input
            placeholder='search'
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </section>
        <ActiveTaskList
          onSetActive={onSetActive}
          activeNoteId={activeTask ? activeTask.id : ''}
          filter={filter}
        />
        <ArchivedTaskList filter={filter} />
      </main>
    </>
  );
};

HomePage.propTypes = {};
