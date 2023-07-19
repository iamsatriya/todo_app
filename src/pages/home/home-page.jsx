import { forwardRef, useContext, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { MdOutlineSearch, MdModeNight, MdLightMode } from 'react-icons/md';
import styles from './home.module.css';
import LogoSmall from '../../assets/images/logo-small.svg';
import {
  PrimaryButton,
  Heading1,
  Text,
  ActiveTaskList,
  ArchivedTaskList,
  AuthDialog,
  TextInput,
} from '../../components';
import { ThemeContext } from '../../contexts';
import { useDialog } from '../../hooks';
import {
  archiveNote,
  deleteNote,
  getActiveNotes,
  getArchivedNotes,
  getDay,
  getGreetings,
  getShortDate,
  getUserLogged,
  unarchiveNote,
  getTimeEstablished,
  getStorageActiveTaskId,
  setStorageActiveTask,
  removeStorageActiveTask,
  getStorageActiveTaskStartDate,
  addNote,
} from '../../utils';

export const HomePage = () => {
  const today = new Date();
  const searchRef = useRef();
  const [search, setSearch] = useState('');
  const onSearch = (event) => {
    setSearch(event.target.value);
  };

  const [name, setName] = useState('');

  const [activeTask, setActiveTask] = useState();
  const onSetActive = (task) => {
    setStorageActiveTask(task.id);
    setActiveTask(task);
  };
  const onRemoveTask = () => {
    setActiveTask(undefined);
    removeStorageActiveTask();
  };

  const [activeTaskList, setActiveTaskList] = useState([]);
  const [archivedTaskList, setArchivedTaskList] = useState([]);

  const onFetchTask = async () => {
    const responseActive = await getActiveNotes();
    if (!responseActive.error) {
      setActiveTaskList(responseActive.data);
      const taskId = getStorageActiveTaskId();
      if (taskId) {
        const task = responseActive.data.find((task) => task.id === taskId);
        if (task) {
          setActiveTask(task);
        }
      }
    }

    const responseArchived = await getArchivedNotes();
    if (!responseArchived.error) {
      setArchivedTaskList(responseArchived.data);
    }
  };

  const onArchive = async (id) => {
    const { error } = await archiveNote(id);
    if (!error) {
      onFetchTask();
    }
  };

  const onUnarchive = async (id) => {
    const { error } = await unarchiveNote(id);
    if (!error) {
      onFetchTask();
    }
  };

  const onDelete = async (id) => {
    const { error } = await deleteNote(id);
    if (!error) {
      onFetchTask();
    }
  };

  const filteredActive = activeTaskList
    .filter((task) => task.title.toLowerCase().includes(search.toLowerCase()))
    .filter((task) => task.id !== activeTask?.id || '');

  const filteredArchived = archivedTaskList.filter((task) =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    const fetchPersonalInformation = async () => {
      const { error, data } = await getUserLogged();
      if (!error) {
        setName(data.name);
      }
    };
    fetchPersonalInformation();
    onFetchTask();
  }, []);

  const {
    ref: dialogRef,
    showDialog: onShowDialog,
    closeDialog: onCloseDialog,
  } = useDialog();

  return (
    <>
      <NewTaskDialog ref={dialogRef} close={onCloseDialog} />
      <HomePageHeader />
      <main>
        <section className={styles.main_heading_container}>
          <section className={styles.greeting_container}>
            <Heading1>
              Good {getGreetings(today)}, {name}!
            </Heading1>
            <Text semibold>Today is {getDay(today)}</Text>
            <Text light>{getShortDate(today)}</Text>
            <section className={styles.greeting_button_container}>
              <PrimaryButton fullWidth onClick={onShowDialog}>
                + Add New Task
              </PrimaryButton>
            </section>
          </section>
          <section className={styles.selected_task_container}>
            {activeTask && (
              <ActiveTask
                task={activeTask}
                onRemove={onRemoveTask}
                onArchive={onArchive}
              />
            )}
            {!activeTask && <NoActiveTask />}
          </section>
        </section>
        <SearchSection
          ref={searchRef}
          search={search}
          onSearch={onSearch}
          setRefFocus={() => {
            searchRef.current.focus();
          }}
        />
        <ActiveTaskList
          tasks={filteredActive}
          onArchive={onArchive}
          onDelete={onDelete}
          onSetActive={onSetActive}
        />
        <ArchivedTaskList
          tasks={filteredArchived}
          onUnarchive={onUnarchive}
          onDelete={onDelete}
        />
      </main>
    </>
  );
};

const NewTaskDialog = forwardRef(function NewTaskDialog({ close }, ref) {
  const onSubmit = async (event) => {
    event.preventDefault();
    const [title, body] = event.target;
    try {
      const { error, data } = await addNote({
        title: title.value,
        body: body.value,
      });
      console.log('responsedata', data);
      if (!error) {
        location.reload();
      }
    } catch (e) {
      console.log(e);
    } finally {
      close();
    }
    console.log(event);
  };
  return (
    <AuthDialog
      ref={ref}
      formLabel='New Task'
      onSubmit={onSubmit}
      close={close}
    >
      <TextInput
        id='title'
        label='Title'
        type='text'
        placeholder='Title goes here'
      />
      <TextInput
        id='body'
        label='Body'
        type='text'
        placeholder='Body goes here'
      />
    </AuthDialog>
  );
});

NewTaskDialog.propTypes = {
  close: PropTypes.func.isRequired,
};

const SearchSection = forwardRef(function SearchSection(
  { setRefFocus, search, onSearch },
  ref
) {
  const { theme } = useContext(ThemeContext);
  const [isFocus, setIsFocus] = useState(false);
  const setFocus = () => {
    setIsFocus(true);
    setRefFocus();
  };
  const setBlur = () => {
    if (ref.current) {
      ref.current.value ? setIsFocus(true) : setIsFocus(false);
    }
  };
  return (
    <section className={styles.search_container}>
      <div className={styles.searchbox}>
        <div
          className={`${styles.search_button} ${
            isFocus ? styles.search_button_focus : ''
          }`}
          onClick={setFocus}
        >
          <MdOutlineSearch size={20} />
          <span
            className={`${styles.search_button__title} ${
              isFocus && styles.search_button__title_removed
            }`}
          >
            <Text>Search</Text>
          </span>
        </div>
        <input
          data-theme={theme}
          ref={ref}
          className={styles.search_input}
          value={search}
          onChange={onSearch}
          onFocus={setFocus}
          onBlur={setBlur}
        />
      </div>
    </section>
  );
});

SearchSection.propTypes = {
  setRefFocus: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
};

const TimeEstablish = () => {
  const timeStarted = getStorageActiveTaskStartDate();

  const [time, setTime] = useState(() => {
    getTimeEstablished(new Date(timeStarted));
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTimeEstablished(new Date(timeStarted)));
    }, 1000);
    return () => clearInterval(interval);
  }, [timeStarted]);

  return (
    <section className={styles.timer_container}>
      <Text semibold>Time Established</Text>
      <Heading1>{time || '-'}</Heading1>
    </section>
  );
};

const ActiveTask = ({ task, onRemove, onArchive }) => {
  const { theme } = useContext(ThemeContext);

  const { id, title, body, createdAt } = task;
  const onPending = () => {
    onRemove();
  };

  const onFinish = async () => {
    const { error } = await archiveNote(id);
    if (!error) {
      onArchive(id);
      onRemove();
    }
  };

  return (
    <section>
      <TimeEstablish />
      <section data-theme={theme} className={styles.active_task_container}>
        <Text semibold>{title}</Text>
        <p>{getShortDate(new Date(createdAt))}</p>
        <p>{body}</p>
        <button
          data-theme={theme}
          className={styles.button_pending}
          onClick={onPending}
        >
          Pending Task
        </button>
        <button
          data-theme={theme}
          className={styles.button_finish}
          onClick={onFinish}
        >
          Finish Task
        </button>
      </section>
    </section>
  );
};

ActiveTask.propTypes = {
  task: PropTypes.object.isRequired,
  onRemove: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
};

const NoActiveTask = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <section data-theme={theme} className={styles.no_task_container}>
      <Text semibold>You have no active task :(</Text>
    </section>
  );
};

const HomePageHeader = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className={styles.header}>
      <img src={LogoSmall} className={styles.header_image} />
      <div className={styles.header}>
        <button
          data-theme={theme}
          className={styles.theme_mode_button}
          onClick={toggleTheme}
        >
          {theme === 'dark' ? (
            <MdModeNight size={36} />
          ) : (
            <MdLightMode size={36} />
          )}
        </button>
      </div>
    </header>
  );
};
