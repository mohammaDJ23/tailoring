import { Action, SearchQuery, SearchQueryActions, SearchQueryObj } from "../../types";

const initialState: SearchQueryObj = {
  query: ""
};

function searchQuery(state: SearchQueryObj, action: SearchQuery) {
  const { query } = action.payload;

  return {
    ...state,

    query
  };
}

export function reducer(state: SearchQueryObj = initialState, action: SearchQueryActions) {
  switch (action.type) {
    case Action.SEARCH_QUERY:
      return searchQuery(state, action);

    default:
      return state;
  }
}
