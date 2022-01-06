import dynamic from "next/dynamic";
import Spinner from "../../shared/components/spinner";

class AsyncImport {
  import(importedComponents: any) {
    return dynamic(importedComponents, {
      loading: () => <Spinner />,
      ssr: false
    });
  }
}

export const asyncImport = new AsyncImport().import;
