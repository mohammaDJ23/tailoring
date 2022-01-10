import { Action, ChnagePage, ListsActions, ListsObj, SetLists, UpdateList } from "../../types";

const initialState: ListsObj = {
  lists: {}
};

function setLists(state: ListsObj, action: SetLists): ListsObj {
  const { list } = action.payload;

  return {
    ...state,

    lists: {
      ...state.lists,

      ...list
    }
  };
}

function changePage(state: ListsObj, action: ChnagePage): ListsObj {
  const { page, type, list } = action.payload;

  return {
    ...state,

    lists: {
      ...state.lists,

      [type]: {
        ...state.lists[type],

        list: {
          ...state.lists[type].list,

          [page]: list
        },

        current: page
      }
    }
  };
}

function updateList(state: ListsObj, action: UpdateList): ListsObj {
  const { list, type, max } = action.payload;

  return {
    ...state,

    lists: {
      ...state.lists,

      [type]: {
        ...state.lists[type],

        list: {
          [1]: list
        },

        max,
        current: 1
      }
    }
  };
}

export function reducer(state: ListsObj = initialState, action: ListsActions): ListsObj {
  switch (action.type) {
    case Action.SET_LISTS:
      return setLists(state, action);

    case Action.CHANGE_PAGE:
      return changePage(state, action);

    case Action.UPDATE_LIST:
      return updateList(state, action);

    default:
      return state;
  }
}
