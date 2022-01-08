import { Action, EnablingElementActions } from "../../types";

export function enablingElement(elementName: string): EnablingElementActions {
  return {
    type: Action.ENABLING_ELEMENT,

    payload: {
      elementName
    }
  };
}
