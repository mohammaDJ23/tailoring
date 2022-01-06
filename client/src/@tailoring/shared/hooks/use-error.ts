import { useEffect } from "react";
import toast from "react-hot-toast";

export function useError(error: string) {
  useEffect(
    function () {
      if (!error) {
        return;
      }

      toast.error(error);
    },

    [error]
  );

  return {};
}
