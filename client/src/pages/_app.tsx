import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import GlobalStyle from "../styles";
import "../styles/fonts.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Spinner from "../@tailoring/shared/components/spinner";
import { useError, useRequestLoading, useRedirectLoading, useState } from "../@tailoring/shared/hooks";
import { wrapper } from "../@tailoring/redux";

function MyApp({ Component, pageProps }: AppProps) {
  const { loading } = useRedirectLoading();
  const { requestProcessReducer } = useState();
  const {} = useError();
  const {} = useRequestLoading();

  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 5000
        }}
      />

      <GlobalStyle />

      {loading ? <Spinner /> : !requestProcessReducer.errors.server && <Component {...pageProps} />}
    </>
  );
}

export default wrapper.withRedux(MyApp);
