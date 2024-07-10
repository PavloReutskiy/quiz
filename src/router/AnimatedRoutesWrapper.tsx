import { AnimatePresence } from 'framer-motion';
import { FC, ReactNode } from 'react';
import { Routes, useLocation } from 'react-router-dom';

type Props = {
  children: ReactNode;
};

const AnimatedRoutesWrapper: FC<Props> = ({ children }) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {children}
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutesWrapper;
