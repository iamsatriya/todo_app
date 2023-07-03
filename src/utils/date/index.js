export const formatLongDate = (date) => {
  return new Intl.DateTimeFormat('en-EN', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(date);
};

export const formatDay = (date) => {
  return new Intl.DateTimeFormat('en-EN', { weekday: 'long' }).format(date);
};

export const formatTimeEstablished = (date) => {
  const timeDiff = new Date() - date;
  console.log('timeDiff', timeDiff);
  const second = Math.floor((timeDiff % (1000 * 60)) / 1000);
  const minute = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  const hour = Math.floor(
    (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const day = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

  console.log('day', day, 'hour', hour, 'minute', minute, 'second', second);
  let result = '';
  if (day) result += `${day}d `;
  if (hour) result += `${hour}h `;
  if (minute) result += `${minute}m `;
  if (second) result += `${second}s`;
  return result;
};
