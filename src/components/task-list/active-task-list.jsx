import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getActiveNotes } from '../../utils';
import { ListBase } from './list-base';

export const ActiveTaskList = ({ onSetActive, filter, activeNoteId }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await getActiveNotes();
      if (!response.error) {
        const filteredTasks = response.data.filter(
          (task) =>
            task.title.toLowerCase().includes(filter.toLowerCase()) &&
            task.id !== activeNoteId
        );
        setTasks(filteredTasks);
      }
    }
    fetchData();
  }, [activeNoteId, filter]);

  return (
    <ListBase
      isActiveList
      list={tasks}
      title='Active Task'
      onSetActive={onSetActive}
    />
  );
};

ActiveTaskList.propTypes = {
  filter: PropTypes.string.isRequired,
  activeNoteId: PropTypes.string.isRequired,
  onSetActive: PropTypes.func.isRequired,
};
