import { Code, TryObj } from "../../../types";
import Router from "next/router";

class AsyncTry {
  try<T extends any = any>(fn: (...args: any[]) => Promise<T>): (...args: any[]) => Promise<TryObj<T>> {
    return async function (...args) {
      try {
        const data = await fn(...args);

        return {
          data
        };
      } catch (error) {
        const err = error as any;

        switch (err.code) {
          case Code.UNAUTHORIZED:
          case Code.TEMP_REDIRECT:
          case Code.EXPIRATION:
            Router.replace(err.path);
        }

        return {
          error: err.message as string
        };
      }
    };
  }
}

export const asyncTry = new AsyncTry().try;
