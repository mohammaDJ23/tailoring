import { GetServerSideProps, GetServerSidePropsResult } from "next";
import { wrapper } from "../../redux";
import { GlobalObj, ServerProps } from "../../types";
import { serverTry } from "../../utility";

abstract class Server {
  abstract server(fn: (args: ServerProps) => Promise<GetServerSidePropsResult<GlobalObj<any>>>): GetServerSideProps<GlobalObj<any>>;
}

class ServerSideProps implements Server {
  server(fn: (args: ServerProps) => Promise<GetServerSidePropsResult<GlobalObj<any>>>): GetServerSideProps<GlobalObj<any>> {
    return wrapper.getServerSideProps(function (store) {
      return async function (context) {
        return serverTry(() => fn({ store, context }), {
          store,
          context
        });
      };
    });
  }
}

export const serverSideProps = new ServerSideProps().server;
