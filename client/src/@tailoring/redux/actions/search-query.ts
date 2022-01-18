import { Dispatch } from "react";
import { clientError, loading, success } from ".";
import { RootState } from "..";
import { queriesApis } from "../../apis";
import { Rest } from "../../services";
import { Action, AppActions, Loadings, QueryResObj, SearchQuery, UpdateList, UpdateListObj } from "../../types";
import { asyncTry, debounce, getAccessToken } from "../../utility";

function search(query: string, type: string): SearchQuery {
  return {
    type: Action.SEARCH_QUERY,

    payload: {
      query,
      type
    }
  };
}

function updateList(arg: UpdateListObj): UpdateList {
  return {
    type: Action.UPDATE_LIST,
    payload: arg
  };
}

async function sendQuery(query: string, type: string) {
  const accessToken = await getAccessToken();

  return new Rest().req<QueryResObj>(queriesApis[type]({ accessToken, query }));
}

export function searchQuery(query: string, type: string) {
  return async function (dispatch: Dispatch<AppActions>, getState: () => RootState) {
    const state = getState();

    if (state.requestProcessReducer.loading[Loadings.QUERY]) {
      return;
    }

    dispatch(search(query, type));

    await debounce.create(800);

    dispatch(loading(Loadings.QUERY));

    const { data, error } = await asyncTry<QueryResObj>(sendQuery)(query, type);

    if (error) {
      return dispatch(clientError(error));
    }

    dispatch(success(Loadings.QUERY));

    const { list, max } = data!;

    dispatch(updateList({ type, list, max }));
  };
}
