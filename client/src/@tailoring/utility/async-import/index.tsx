import dynamic from "next/dynamic";
import Head from "next/head";
import Spinner from "../../shared/components/spinner";

class AsyncImport {
  import(importedComponents: any, tabTitle: string) {
    const Page = dynamic(importedComponents, {
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
