import { GetServerSidePropsResult } from "next";
import { serverError } from "../../../redux/actions";
import { Code, GlobalObj, ServerProps } from "../../../types";

class Server {
  async try(fn: () => Promise<GetServerSidePropsResult<GlobalObj<any>>>, options: ServerProps): Promise<GetServerSidePropsResult<GlobalObj<any>>> {
    try {
      return await fn();
    } catch (e) {
      const err = e as any;

      options.store.dispatch(serverError(err.message));

      switch (err.code) {
        case Code.UNAUTHORIZED:
        case Code.TEMP_REDIRECT:
        case Code.EXPIRATION:
          return {
            redirect: {
              permanent: false,
              destination: err.path
            }
          };
      }
    }
  }
}

export const serverTry = new Server().try;
