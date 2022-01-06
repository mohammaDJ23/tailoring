import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { paths } from "../../utility";

export function useSideNavigation() {
  const router = useRouter();
  const [collapsIndex, setCollapsIndex] = useState<number>(-1);

  const udpateCollapsIndex = useCallback(function (index: number) {
    setCollapsIndex(index);
  }, []);

  // it gonna works just for one nest array

  const indexOfCurrentPage = useCallback(function (arr: typeof paths, path: string) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i].paths)) {
        const paths = arr[i].paths!;

        for (let j = 0; j < paths.length; j++) {
          if (path === paths[j].path) {
            udpateCollapsIndex(i);

            return;
          }
        }
      }
    }
  }, []);

  useEffect(
    function () {
      indexOfCurrentPage(paths, router.asPath);
    },

    [indexOfCurrentPage, router.asPath]
  );

  return { path: router.asPath, collapsIndex, udpateCollapsIndex };
}
