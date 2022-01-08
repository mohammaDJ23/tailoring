import { Action, ClientError, Loading, ServerError, Success } from "../../types";

export function loading(loadingProcess: string): Loading {
  return {
    type: Action.LOADING,

    payload: {
      loadingProcess
    }
  };
}

export function success(loadingProcess: string): Success {
  return {
    type: Action.SUCCESS,

    payload: {
      loadingProcess
    }
  };
}

export function clientError<T extends string>(error: T): ClientError<T> {
  return {
    type: Action.CLIENT_ERROR,

    payload: {
      error
    }
  };
}

export function serverError<T extends string>(error: T): ServerError<T> {
  return {
    type: Action.SERVER_ERROR,

    payload: {
      error
    }
  };
}
