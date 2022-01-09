import { combineReducers } from "redux";
import { reducer as requestProcessReducer } from "./request-process";
import { reducer as formsReducer } from "./forms";
import { reducer as enablingElementReducer } from "./enabling-element";
import { reducer as listsReducer } from "./lists";

const reducers = combineReducers({
  requestProcessReducer,
  formsReducer,
  enablingElementReducer,
  listsReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
