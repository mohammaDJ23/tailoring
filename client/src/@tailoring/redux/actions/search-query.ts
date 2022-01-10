import { Dispatch } from "react";
import { clientError, loading, success } from ".";
import { RootState } from "..";
import { Action, AppActions, Loadings, SearchQuery, UpdateList, UpdateListObj } from "../../types";
import { asyncTry, debounce } from "../../utility";

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

async function sendQuery(queyr: string, type: string) {
  return new Promise<{ list: any[]; max: number }>(function (resolve) {
    setTimeout(function () {
      resolve({
        list: [
          { id: 11, name: "mehrdad nowresideh" },
          { id: 12, name: "mehrdad nowresideh" },
          { id: 13, name: "mehrdad nowresideh" },
          { id: 14, name: "mehrdad nowresideh" },
          { id: 15, name: "mehrdad nowresideh" },
          { id: 16, name: "mehrdad nowresideh" },
          { id: 17, name: "mehrdad nowresideh" },
          { id: 18, name: "mehrdad nowresideh" },
          { id: 19, name: "mehrdad nowresideh" },
          { id: 20, name: "mehrdad nowresideh" }
        ],

        max: 1
      });
    }, 2000);
  });
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

    const { data, error } = await asyncTry<{ list: any[]; max: number }>(sendQuery)(query, type);

    if (error) {
      return dispatch(clientError(error));
    }

    dispatch(success(Loadings.QUERY));
    dispatch(updateList({ type, list: data!.list, max: data!.max }));
  };
}
