import { FC, LazyExoticComponent, Suspense, lazy } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';

const Question1 = lazy(() => import('../Question1'));
const Question2 = lazy(() => import('../Question2'));
const Question3 = lazy(() => import('../Question3'));
const Question4 = lazy(() => import('../Question4'));
const Question5 = lazy(() => import('../Question5'));

const componentsMap: { [key: string]: LazyExoticComponent<FC> } = {
  1: Question1,
  2: Question2,
  3: Question3,
  4: Question4,
  5: Question5,
};

const QuestionPage = () => {
  const { questionId } = useParams<{ questionId: string }>();

  if (!questionId || !componentsMap[questionId]) {
    return <Navigate to="/not-found" replace />;
  }

  const CurrentComponent = componentsMap[questionId];

  return (
    <Suspense fallback={<Loader />}>
      <CurrentComponent />
    </Suspense>
  );
};

export default QuestionPage;
