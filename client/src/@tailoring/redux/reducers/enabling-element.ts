import { Action, EnablingElement, EnablingElementActions, EnablingElementObj } from "../../types";

const initilState: EnablingElementObj = {
  elementName: ""
};

function enablingElement(state: EnablingElementObj, action: EnablingElement): EnablingElementObj {
  const { elementName } = action.payload;

  return {
    ...state,

    elementName: state.elementName === elementName ? "" : elementName
  };
}

export function reducer(state: EnablingElementObj = initilState, action: EnablingElementActions): EnablingElementObj {
  switch (action.type) {
    case Action.ENABLING_ELEMENT:
      return enablingElement(state, action);

    default:
      return state;
  }
}
