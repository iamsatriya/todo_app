import { useMemo, useState, useEffect } from 'react';
import { AuthenticationPage, ErrorPage, HomePage, TasksDetail } from './pages';
import { ThemeProvider } from './contexts';
import { getLocalTheme, setLocalTheme } from './utils';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { taskLoader, userLoader } from './routes';

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
      toggleTheme,
    };
  }, [theme]);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
      errorElement: <ErrorPage />,
      loader: userLoader,
    },
    {
      path: '/auth',
      element: <AuthenticationPage />,
    },
    {
      path: 'task/:taskId',
      element: <TasksDetail />,
      loader: taskLoader,
      errorElement: <ErrorPage />,
    },
  ]);

  return (
    <>
      <ThemeProvider value={themeContextValue}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
