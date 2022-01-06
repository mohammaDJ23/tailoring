import { Action, Error, RequestProcessActions, RequestProcessObj } from "../../types";

const initalState: RequestProcessObj = {
  loading: false,
  error: ""
};

function loading<T extends RequestProcessObj>(state: T): T {
  return {
    ...state,

    loading: true,
    error: ""
  };
}

function sucess<T extends RequestProcessObj>(state: T): T {
  return {
    ...state,

    loading: false,
    error: ""
  };
}

function error<T extends RequestProcessObj, K extends Error>(state: T, action: K): T {
  const { error } = action.payload;

  return {
    ...state,

    loading: false,
    error
  };
}

export function reducer(state: RequestProcessObj = initalState, action: RequestProcessActions) {
  switch (action.type) {
    case Action.LOADING:
      return loading(state);

    case Action.SUCCESS:
      return sucess(state);

    case Action.ERROR:
      return error(state, action);

    default:
      return state;
  }
}
