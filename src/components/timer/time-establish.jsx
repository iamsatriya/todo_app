import { useEffect, useState } from 'react';
import { formatTimeEstablished, getStartTime } from '../../utils';
import { Heading1 } from '../typography';

export const TimeEstablish = () => {
  const timeStarted = getStartTime();

  const [time, setTime] = useState(() => {
    formatTimeEstablished(timeStarted);
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(formatTimeEstablished(timeStarted));
    }, 1000);
    return () => clearInterval(interval);
  }, [timeStarted]);

  return <Heading1>{time}</Heading1>;
};
