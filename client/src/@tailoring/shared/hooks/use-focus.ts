import { useEffect } from "react";

export function useFocus() {
  useEffect(
    function () {
      const inputElement = document.querySelector("input") as HTMLInputElement;

      if (!inputElement) {
        return;
      }

      inputElement.focus();
    },

    []
  );

  return {};
}
