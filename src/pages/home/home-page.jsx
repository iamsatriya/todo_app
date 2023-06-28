import { useContext, useEffect, useState } from 'react';
import { ActiveTaskList, ArchivedTaskList, Heading1, MenuButton, PrimaryButton, Text2 } from '../../components';
import Logo from '../../assets/images/logo-small.svg';
import { formatDay, formatLongDate, getUserLogged } from '../../utils';
import { ThemeContext } from '../../contexts';
import styles from './styles.module.css';

export const HomePage = () => {
  const { theme } = useContext(ThemeContext);

  const [user, setUser] = useState();

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
            <PrimaryButton fullWidth>+ Add New Task</PrimaryButton>
          </section>
          {/* right and bottom */}
          <section>
            {/* if empty active */}
            <section data-theme={theme} className={styles.no_task_container}>
              <Text2>You have no active task :(</Text2>
            </section>
          </section>
        </section>
        {/* all task section, create component later */}
        {/* <section className={styles.task_container}>
          <section className={styles.task_container__header}>
            <Heading4>All Task</Heading4>
            <Text2>( {activeNote && activeNote.length} )</Text2>
          </section>
          <section className={styles.list_container}>
            {activeNote &&
              activeNote.map((note) => (
                <article key={note.id} style={{ minWidth: activeNote.length > 1 ? '80%' : '100%' }}>
                  <Text2>{note.title}</Text2>
                  <p>{formatLongDate(new Date(note.createdAt))}</p>
                  <p>{note.body}</p>
                  <section className={styles.task_action_container}>
                    <button>Set as Active</button>
                    <section className={styles.task_action_container}>
                      <button>
                        <MdArchive />
                      </button>
                      <button>
                        <MdDeleteForever />
                      </button>
                    </section>
                  </section>
                </article>
              ))}
          </section>
        </section> */}
        <ActiveTaskList />
        <ArchivedTaskList />
      </main>
    </>
  );
};

HomePage.propTypes = {};
