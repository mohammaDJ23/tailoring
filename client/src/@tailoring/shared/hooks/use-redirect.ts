import { useRouter } from "next/router";
import { useCallback } from "react";
import { RedirectPaths } from "../../types";

export function useRedirect() {
  const router = useRouter();

  const redirect = useCallback(
    <T extends RedirectPaths, K extends string>(route: T, path: K): void => {
      if (path === router.asPath) {
        return;
      }

      router[route](path);
    },

    [router]
  );

  return { redirect };
}
