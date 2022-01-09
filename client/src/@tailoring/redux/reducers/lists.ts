import { Action, ListsActions, ListsObj, SetLists } from "../../types";

const initialState: ListsObj = {
  lists: {}
};

function setLists(state: ListsObj, action: SetLists): ListsObj {
  const { lists } = action.payload;

  return {
    ...state,

    lists: {
      ...state.lists,

      ...lists
    }
  };
}

export function reducer(state: ListsObj = initialState, action: ListsActions): ListsObj {
  switch (action.type) {
    case Action.SET_LISTS:
      return setLists(state, action);

    default:
      return state;
  }
}
