import { useMemo, useState, useEffect } from 'react';
import { AuthenticationPages } from './pages';
import { ThemeProvider } from './contexts';
import { getLocalTheme, setLocalTheme } from './utils';

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = getLocalTheme();
    return savedTheme || 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    setLocalTheme(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const themeContextValue = useMemo(() => {
    return {
      theme,
      toggleTheme
    };
  }, [theme]);

  return (
    <>
      <ThemeProvider value={themeContextValue}>
        <AuthenticationPages />
      </ThemeProvider>
    </>
  );
}

export default App;
