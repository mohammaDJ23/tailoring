import { Action, GlobalObj, SetLists } from "../../types";

export function setLists(lists: GlobalObj<any[]>): SetLists {
  return {
    type: Action.SET_LISTS,

    payload: {
      lists
    }
  };
}
