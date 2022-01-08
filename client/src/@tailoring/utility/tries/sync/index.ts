import { TryObj } from "../../../types";

class SyncTry {
  try<T extends any = any>(fn: (...args: any[]) => T): (...args: any[]) => TryObj<T> {
    return function (args) {
      try {
        const data = fn(args);

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
