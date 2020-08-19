import { useCallback } from 'react';
import { debounce, throttle } from 'underscore';

const useDelayedCallback = (cb, wait, deps) => (
  useCallback(
    throttle(debounce(q => cb(q), wait), wait), deps
  )
);

export default useDelayedCallback;
