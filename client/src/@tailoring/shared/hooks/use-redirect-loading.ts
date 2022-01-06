import { useState, useEffect } from "react";
import Router from "next/router";

export function useRedirectLoading() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url: string) => url !== Router.asPath && setLoading(true);
    const handleComplete = (url: string) => url === Router.asPath && setLoading(false);

    Router.events.on("routeChangeStart", handleStart);
    Router.events.on("routeChangeComplete", handleComplete);
    Router.events.on("routeChangeError", handleComplete);

    return () => {
      Router.events.off("routeChangeStart", handleStart);
      Router.events.off("routeChangeComplete", handleComplete);
      Router.events.off("routeChangeError", handleComplete);
    };
  }, []);

  return { loading };
}
