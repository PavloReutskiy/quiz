import { lazy, Suspense } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import Loader from '@/components/Loader/Loader';
import Layout from '@/components/Layout/Layout';
import NotFoundPage from '@/components/Pages/NotFoundPage';
import { RoutePath } from './routes';

const QuizPage1 = lazy(() => import('../components/Pages/QuizPage1'));
const QuizPage2 = lazy(() => import('../components/Pages/QuizPage2'));
const QuizPage3 = lazy(() => import('../components/Pages/QuizPage3'));
const QuizPage4 = lazy(() => import('../components/Pages/QuizPage4'));
const QuizPage5 = lazy(() => import('../components/Pages/QuizPage5'));
const EmailPage = lazy(() => import('../components/Pages/EmailPage'));
const ThankYouPage = lazy(() => import('../components/Pages/ThankYouPage'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/quiz/1" />,
    errorElement: <NotFoundPage />,
  },
  {
    path: `/${RoutePath.QUIZ}`,
    element: <Layout />,
    children: [
      {
        path: `${RoutePath.QUIZ_1}`,
        element: (
          <Suspense fallback={<Loader />}>
            <QuizPage1 />
          </Suspense>
        ),
      },
      {
        path: `${RoutePath.QUIZ_2}`,
        element: (
          <Suspense fallback={<Loader />}>
            <QuizPage2 />
          </Suspense>
        ),
      },
      {
        path: `${RoutePath.QUIZ_3}`,
        element: (
          <Suspense fallback={<Loader />}>
            <QuizPage3 />
          </Suspense>
        ),
      },
      {
        path: `${RoutePath.QUIZ_4}`,
        element: (
          <Suspense fallback={<Loader />}>
            <QuizPage4 />
          </Suspense>
        ),
      },
      {
        path: `${RoutePath.QUIZ_5}`,
        element: (
          <Suspense fallback={<Loader />}>
            <QuizPage5 />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: `/${RoutePath.EMAIL}`,
    element: (
      <Suspense fallback={<Loader />}>
        <EmailPage />
      </Suspense>
    ),
  },
  {
    path: `/${RoutePath.THANK_YOU}`,
    element: (
      <Suspense fallback={<Loader />}>
        <ThankYouPage />
      </Suspense>
    ),
  },
]);

export default router;
