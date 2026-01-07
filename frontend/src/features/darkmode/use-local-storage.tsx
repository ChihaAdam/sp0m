import { useState, useEffect } from "react";
import { getItem, setItem } from "./localStorage";
function useLocalStorage<T = any>(key: string, initialValue: T) {
  const [value, setValue] = useState(getItem(key) ?? initialValue);
  useEffect(() => {
    setItem(key, value);
  }, [value]);
  return [value, setValue] as const;
}

export default useLocalStorage;
