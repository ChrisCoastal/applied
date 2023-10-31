import { useRef } from 'react';

type Throttle = {
  callback: Function;
  dur: number;
};

const useThrottle = ({
  callback,
  dur,
}: Throttle): { throttled: Function; isThrottled: boolean } => {
  const timeoutRef = useRef<null | Symbol>(null);
  const throttledCallback: null | Function = null;

  if (timeoutRef.current)
    return { throttled: throttledCallback!, isThrottled: true };
  const timer = setTimeout(() => callback, dur);

  return { throttled: throttledCallback!, isThrottled: false };
};

export default useThrottle;
