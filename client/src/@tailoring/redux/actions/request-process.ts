import { Action, Error, Loading, Success } from "../../types";

export function loading(): Loading {
  return {
    type: Action.LOADING
  };
}

export function success(): Success {
  return {
    type: Action.SUCCESS
  };
}

export function error<T extends string>(error: T): Error<T> {
  return {
    type: Action.ERROR,

    payload: {
      error
    }
  };
}
