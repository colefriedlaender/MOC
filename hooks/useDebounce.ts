import { useEffect, useState } from "react";

function useDebounce<T>(value: T, delay: number) {
  const [debounceValue, setDebounceValue] = useState<T>(value);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [value]);

  return debounceValue;
}

export default useDebounce;
