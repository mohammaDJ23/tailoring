import { TryObj } from "../../../types";

class AsyncTry {
  try<T extends unknown, K extends unknown>(fn: (arg: T) => Promise<K>): (arg: T) => Promise<TryObj<K>> {
    return async function (arg) {
      try {
        const data = await fn.call(arg, arg);

        return {
          data
        };
      } catch (error) {
        const err = error as any;

        return {
          error: err.message as string
        };
      }
    };
  }
}

export const asyncTry = new AsyncTry().try;
