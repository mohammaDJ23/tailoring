import { TryObj } from "../../../types";

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

        return {
          error: err.message as string
        };
      }
    };
  }
}

export const asyncTry = new AsyncTry().try;
