import { lazy, Suspense } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import Loader from '@/components/Loader/Loader';
import Layout from '@/components/Layout/Layout';
import NotFoundPage from '@/components/Pages/NotFoundPage';
import { RoutePath } from './routes';

const QuestionPage = lazy(() => import('../components/Pages/QuestionPage'));
const EmailPage = lazy(() => import('../components/Pages/EmailPage'));
const ThankYouPage = lazy(() => import('../components/Pages/ThankYouPage'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to={`/${RoutePath.QUIZ}/1`} />,
    errorElement: <NotFoundPage />,
  },
  {
    path: `/${RoutePath.QUIZ}`,
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Navigate to={`/${RoutePath.QUIZ}/1`} replace />,
      },
      {
        path: ':questionId',
        element: (
          <Suspense fallback={<Loader />}>
            <QuestionPage />
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
  {
    path: `/${RoutePath.NOT_FOUND}`,
    element: <NotFoundPage />,
  },
]);

export default router;
