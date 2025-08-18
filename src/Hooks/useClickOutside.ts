import { useCallback, useEffect, useRef } from 'react';
import type { RefObject } from 'react';

type Callback = (event: MouseEvent) => void;

const useClickOutside = (callback: Callback): RefObject<HTMLDivElement | null> => {
  const currentRef = useRef<HTMLDivElement>(null);

  const checkParent = (t: any, elm: HTMLElement | null) => {
    while (t.parentNode) {
      if (t === elm) {
        return true;
      }
      t = t.parentNode;
    }
    return false;
  };

  const check = useCallback(
    (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      if (!checkParent(target, currentRef.current)) {
        callback(e);
      }
    },
    [callback, currentRef]
  );

  useEffect(() => {
    document.addEventListener('click', check, true);

    return () => {
      document.removeEventListener('click', check, true);
    };
  }, [check]);

  return currentRef;
};

export default useClickOutside;
