import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from '@/components/Pages/Main';
import { ThemeProvider } from 'styled-components';
import theme from '@/styles/theme';
import GlobalStyles from '@/styles/GlobalStyles';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
]);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
