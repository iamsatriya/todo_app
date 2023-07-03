import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getArchivedNotes } from '../../utils';
import { ListBase } from './list-base';

export const ArchivedTaskList = ({ filter }) => {
  const [task, setTask] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await getArchivedNotes();
      if (!response.error) {
        const filteredTasks = response.data.filter((task) =>
          task.title.toLowerCase().includes(filter.toLowerCase())
        );
        setTask(filteredTasks);
      }
    }
    fetchData();
  }, [filter]);

  return <ListBase isArchivedList title='Archived Task' list={task} />;
};

ArchivedTaskList.propTypes = {
  filter: PropTypes.string.isRequired,
};
