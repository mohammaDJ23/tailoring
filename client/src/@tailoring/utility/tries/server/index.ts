import { GetServerSidePropsResult } from "next";
import { error } from "../../../redux/actions";
import { Code, GlobalObj, ServerProps } from "../../../types";

class Server {
  async try(fn: () => Promise<GetServerSidePropsResult<GlobalObj<any>>>, options: ServerProps): Promise<GetServerSidePropsResult<GlobalObj<any>>> {
    try {
      return await fn();
    } catch (e) {
      const err = e as any;

      options.store.dispatch(error(err.message));

      switch (err.code) {
        case Code.TEMP_REDIRECT:
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
