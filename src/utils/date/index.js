export const formatLongDate = (date) => {
  return new Intl.DateTimeFormat('en-EN', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  }).format(date);
};

export const formatDay = (date) => {
  return new Intl.DateTimeFormat('en-EN', { weekday: 'long' }).format(date);
};
