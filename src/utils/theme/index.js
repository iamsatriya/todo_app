const themeKey = 'APP_THEME';

export const getLocalTheme = () => {
  const theme = localStorage.getItem(themeKey);
  return theme;
};

export const setLocalTheme = (theme) => {
  localStorage.setItem(themeKey, theme);
};
