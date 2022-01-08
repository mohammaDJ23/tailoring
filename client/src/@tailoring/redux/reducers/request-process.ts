import { Action, ClientError, Loading, RequestProcessActions, RequestProcessObj, ServerError, Success } from "../../types";

const initalState: RequestProcessObj = {
  loading: {},
  errors: {
    server: "",
    client: ""
  }
};

function loading<T extends RequestProcessObj, K extends Loading>(state: T, action: K): T {
  const { loadingProcess } = action.payload;

  return {
    ...state,

    loading: {
      ...state.loading,

      [loadingProcess]: true
    },

    errors: {
      ...state.errors,

      client: "",
      server: ""
    }
  };
}

function sucess<T extends RequestProcessObj, K extends Success>(state: T, action: K): T {
  const { loadingProcess } = action.payload;

  return {
    ...state,

    loading: {
      ...state.loading,

      [loadingProcess]: false
    },

    errors: {
      ...state.errors,

      client: "",
      server: ""
    }
  };
}

function clientError<T extends RequestProcessObj, K extends ClientError>(state: T, action: K): T {
  const { error } = action.payload;

  return {
    ...state,

    loading: (function () {
      const loading = { ...state.loading };

      for (const key in loading) {
        loading[key] = false;
      }

      return loading;
    })(),

    errors: {
      ...state.errors,

      client: error
    }
  };
}

function serverError<T extends RequestProcessObj, K extends ServerError>(state: T, action: K): T {
  const { error } = action.payload;

  return {
    ...state,

    loading: {},

    errors: {
      ...state.errors,

      server: error
    }
  };
}

export function reducer(state: RequestProcessObj = initalState, action: RequestProcessActions) {
  switch (action.type) {
    case Action.LOADING:
      return loading(state, action);

    case Action.SUCCESS:
      return sucess(state, action);

    case Action.CLIENT_ERROR:
      return clientError(state, action);

    case Action.SERVER_ERROR:
      return serverError(state, action);

    default:
      return state;
  }
}
