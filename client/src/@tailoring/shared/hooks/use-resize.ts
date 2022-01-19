import { useCallback, useEffect } from "react";

export const useResize = (callback: (window: Window) => void) => {
  // resize logic

  const resizeHandler = useCallback(
    function (event: UIEvent) {
      callback(window);
    },

    [callback]
  );

  // resize event

  useEffect(
    function () {
      window.addEventListener("resize", resizeHandler);

      return () => {
        window.removeEventListener("resize", resizeHandler);
      };
    },

    [resizeHandler]
  );

  return {};
};
