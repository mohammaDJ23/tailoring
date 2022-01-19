import { useCallback } from "react";
import { debounce as d } from "../../utility";

export function useDebounce() {
  const debounce = useCallback(function (delay: number) {
    return d.create(delay);
  }, []);

  return { debounce };
}
