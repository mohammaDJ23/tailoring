import { TryObj } from "../../../types";

class SyncTry {
  try<T extends unknown, K extends unknown>(fn: (arg: T) => K): (arg: T) => TryObj<K> {
    return function (arg) {
      try {
        const data = fn.call(arg, arg);

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

export const syncTry = new SyncTry().try;
