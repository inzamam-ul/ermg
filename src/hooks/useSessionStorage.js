import { useState } from "react";

export const useSessionStorage = (key, initialValue) => {
  const [localState, setLocalState] = useState(() => {
    try {
      const item = window.sessionStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log("error", error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      setLocalState(value);
      window.sessionStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log("Error when setting value: ", error);
    }
  };

  const removeValue = () => {
    try {
      setLocalState(null);
      window.sessionStorage.removeItem(key);
    } catch (error) {
      console.log("Error when removing value: ", error);
    }
  };

  return [localState, setValue, removeValue];
};
