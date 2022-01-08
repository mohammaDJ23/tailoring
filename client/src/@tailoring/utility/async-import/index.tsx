import dynamic from "next/dynamic";
import Head from "next/head";
import Spinner from "../../shared/components/spinner";
import { AsyncImportObj } from "../../types";

class AsyncImport {
  import<T extends AsyncImportObj>({ component, tabTitle }: T) {
    const Page = dynamic(component, {
      loading: () => <Spinner />,
      ssr: false
    });

    return function () {
      return (
        <>
          <Head>
            <title>{tabTitle}</title>
          </Head>

          <Page />
        </>
      );
    };
  }
}

export const asyncImport = new AsyncImport().import;
