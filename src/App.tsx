import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from '@/styles/theme';
import GlobalStyles from '@/styles/GlobalStyles';
import router from './router/router';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
