import { BrowserRouter, Navigate, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from '@/styles/theme';
import GlobalStyles from '@/styles/GlobalStyles';
import Layout from './components/Layout/Layout';
import QuestionPage from './components/Pages/QuestionPage';
import EmailPage from './components/Pages/EmailPage';
import ThankYouPage from './components/Pages/ThankYouPage';
import NotFoundPage from './components/Pages/NotFoundPage';
import { RoutePath } from './router/routes';
import AnimatedRoutesWrapper from './router/AnimatedRoutesWrapper';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <AnimatedRoutesWrapper>
          <Route path="/" element={<Navigate to={`/${RoutePath.QUIZ}/1`} />} />
          <Route path="" element={<Layout />}>
            <Route
              path={`${RoutePath.QUIZ}/:questionId`}
              element={<QuestionPage />}
            />
          </Route>
          <Route path={RoutePath.EMAIL} element={<EmailPage />} />
          <Route path={RoutePath.THANK_YOU} element={<ThankYouPage />} />
          <Route path={RoutePath.NOT_FOUND} element={<NotFoundPage />} />
          <Route
            path="*"
            element={<Navigate to={`/${RoutePath.NOT_FOUND}`} />}
          />
        </AnimatedRoutesWrapper>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
