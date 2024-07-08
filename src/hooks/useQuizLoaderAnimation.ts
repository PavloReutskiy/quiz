import { useState, useEffect } from 'react';

const useQuizLoaderAnimation = (totalDuration: number) => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    let start: number | null = null;

    const animate = (timestamp: number) => {
      if (!start) {
        start = timestamp;
      }
      const progress = timestamp - start;
      const newPercentage = Math.min((progress / totalDuration) * 100, 100);
      setPercentage(newPercentage);

      if (percentage < 100) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);

    return () => {
      start = null;
    };
  }, [totalDuration, percentage]);

  return percentage;
};

export default useQuizLoaderAnimation;
