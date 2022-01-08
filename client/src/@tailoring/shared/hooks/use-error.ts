import { useCallback, useEffect } from "react";
import toast from "react-hot-toast";
import { useState } from ".";

export function useError() {
  const {
    requestProcessReducer: { errors }
  } = useState();

  const showError = useCallback(error => {
    if (!error) {
      return;
    }

    toast.error(error);
  }, []);

  useEffect(
    function () {
      showError(errors.client || errors.server);
    },

    [errors, showError]
  );

  return {};
}
