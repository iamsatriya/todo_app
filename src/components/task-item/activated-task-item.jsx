import PropTypes from 'prop-types';
import { Text2 } from '../typography';
import {
  archiveNote,
  deleteStartTime,
  formatLongDate,
  getStartTime,
} from '../../utils';
import { TimeEstablish } from '../timer';

export const ActivatedTaskItem = ({ task, onDeactivate }) => {
  const { id, title, createdAt, body } = task;

  const timeStarted = getStartTime();

  const onFinish = async () => {
    const response = await archiveNote(id);
    if (!response.error) {
      deleteStartTime();
      onDeactivate();
      window.location.reload();
    }
  };

  const onPostpone = async () => {
    deleteStartTime();
    onDeactivate();
  };

  return (
    <article style={{ textAlign: 'center' }}>
      <p>Time Established</p>
      {timeStarted && <TimeEstablish />}
      <section style={{ textAlign: 'initial' }}>
        <Text2>{title}</Text2>
        <p>{formatLongDate(new Date(createdAt))}</p>
        <p>{body}</p>
        <section>
          <button onClick={onFinish}>Finish Task</button>
          <button onClick={onPostpone}>Postpone Task</button>
        </section>
      </section>
    </article>
  );
};

ActivatedTaskItem.propTypes = {
  task: PropTypes.object.isRequired,
  onDeactivate: PropTypes.func.isRequired,
};
