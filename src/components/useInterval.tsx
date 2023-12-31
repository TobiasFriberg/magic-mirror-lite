import { useEffect, useRef, useState } from 'react';

const useInterval = (callback: () => void, delay: number, limit: number = 0) => {
  const [count, setCount] = useState(1);
  const intervalRef = useRef<any>(null);
  const callbackRef = useRef<any>(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if ((typeof delay === 'number' && count <= limit) || (typeof delay === 'number' && !limit)) {
      intervalRef.current = window.setInterval(() => {
        setCount((c) => c + 1);
        callbackRef.current(count, setCount);
      }, delay);
      return () => {
        window.clearInterval(intervalRef.current);
      };
    }
  }, [delay, count]);

  return intervalRef;
};

export default useInterval;
