import { Context, createWrapper, HYDRATE } from "next-redux-wrapper";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import { AppStore } from "../types";

// export const store = createStore(reducers, {}, applyMiddleware(thunk));

const makeStore = function (context: Context) {
  return createStore(function (state: any, action: any) {
    if (action.type === HYDRATE) {
      return {
        ...state,
        ...action.payload
      };
    }

    return reducers(state, action);
  }, applyMiddleware(thunk));
};

export const wrapper = createWrapper<AppStore>(makeStore, { debug: true });
