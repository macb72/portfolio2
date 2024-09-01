import { useState, useEffect } from 'react';

const useCountUp = (to, duration = 2) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = to;
    const range = end - start;
    const stepTime = Math.abs(Math.floor(duration * 1000 / range));
    const timer = setInterval(() => {
      setCount(prev => {
        if (prev >= end) {
          clearInterval(timer);
          return end;
        }
        return prev + 1;
      });
    }, stepTime);
    return () => clearInterval(timer);
  }, [to, duration]);

  return count;
};

export default useCountUp;
