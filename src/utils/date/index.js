const getGreetings = (date) => {
  const hours = date.getHours();
  if (hours < 4) {
    return 'Night';
  } else if (hours < 12) {
    return 'Morning';
  } else if (hours < 17) {
    return 'Afternoon';
  } else if (hours < 19) {
    return 'Evening';
  } else {
    return 'Night';
  }
};

const getDay = (date) => {
  return new Intl.DateTimeFormat('en-EN', { weekday: 'long' }).format(date);
};

const getShortDate = (date) => {
  return new Intl.DateTimeFormat('en-EN', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(date);
};

const getTimeEstablished = (date) => {
  const timeDiff = new Date() - date;
  const second = Math.floor((timeDiff % (1000 * 60)) / 1000);
  const minute = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  const hour = Math.floor(
    (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const day = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

  let result = '';
  if (day) result += `${day}d `;
  if (hour) result += `${hour}h `;
  if (minute) result += `${minute}m `;
  if (second) result += `${second}s`;
  return result;
};

export { getGreetings, getDay, getShortDate, getTimeEstablished };
