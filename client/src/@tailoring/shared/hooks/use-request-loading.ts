import { useEffect } from "react";
import toast from "react-hot-toast";
import { useState } from ".";
import { GlobalObj } from "../../types";

const activeLoadings: GlobalObj<string> = {};

export function useRequestLoading() {
  const { requestProcessReducer } = useState();
  const { loading } = requestProcessReducer;

  useEffect(
    function () {
      for (const key in loading) {
        if (loading[key] && !activeLoadings[key]) {
          activeLoadings[key] = toast.loading("Watting...", { duration: Infinity });
        }
      }
    },

    [loading]
  );

  useEffect(
    function () {
      for (const key in activeLoadings) {
        if (!loading[key]) {
          toast.dismiss(activeLoadings[key]);

          delete activeLoadings[key];
        }
      }
    },

    [loading]
  );

  return {};
}
