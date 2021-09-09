import {useCallback, useRef} from 'react';

const useTimeouts = (callback: () => void) => {
  const callbackRef = useRef(callback);
  const timeoutRef = useRef<any>();
  const intervalRef = useRef<any>();

  const set = useCallback(() => {
    timeoutRef.current = setTimeout(() => callbackRef.current(), 15000);
  }, []);

  const clear = useCallback(() => {
    timeoutRef.current && clearTimeout(timeoutRef.current);
  }, []);

  const reset = useCallback(() => {
    clear();
    set();
  }, [clear, set]);

  const intervalSet = useCallback(
    (delay: number) =>
      (intervalRef.current = setInterval(() => callbackRef.current(), delay)),
    [],
  );

  const intervalClear = useCallback(
    () => intervalRef.current && clearInterval(intervalRef.current),
    [],
  );

  return {reset, clear, intervalSet, intervalClear};
};

export default useTimeouts;
