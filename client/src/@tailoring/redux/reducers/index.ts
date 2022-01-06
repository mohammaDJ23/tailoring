import { combineReducers } from "redux";
import { reducer as requestProcessReducer } from "./request-process";
import { reducer as formsReducer } from "./forms";

const reducers = combineReducers({
  requestProcessReducer,
  formsReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
