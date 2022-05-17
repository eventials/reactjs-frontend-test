import { Dispatch, SetStateAction, useEffect, useState } from "react";

export default function useLocalStorage<T>(
  key: string,
  initialValue = null as unknown as T
): [T, Dispatch<SetStateAction<T>>] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      setStoredValue(storedValue);
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.log(error);
    }
  }, [storedValue, key]);

  return [storedValue, setStoredValue];
}
