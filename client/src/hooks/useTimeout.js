import { useEffect } from "react";

export const useTimeout = (cb, timer) => {
  useEffect(() => {
    cb(true);
    setTimeout(() => {
      cb(false);
    }, timer);
  }, [cb, timer]);
};
