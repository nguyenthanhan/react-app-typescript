import { useEffect, useRef, useCallback } from 'react';
import { throttle } from 'lodash';

export const useDebouncedEffect = (effect: any, delay: number, deps: any) => {
  const callback = useCallback(effect, deps);

  useEffect(() => {
    const handler = setTimeout(() => {
      callback();
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [callback, delay]);
};

export const useThrottleScroll = () => {
  const savedHandleEvent = useRef<any>();

  function handleEvent() {}

  useEffect(() => {
    savedHandleEvent.current = handleEvent;
  }, []);

  const throttleOnScroll = useRef(throttle((event: any) => savedHandleEvent.current(event), 100)).current;

  function handleEventPersistence(event: any) {
    return throttleOnScroll(event);
  }

  return {
    onScroll: handleEventPersistence,
  };
};
