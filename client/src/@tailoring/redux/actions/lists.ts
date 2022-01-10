import { Dispatch } from "react";
import { clientError, loading, success } from ".";
import { RootState } from "..";
import { Action, AppActions, ChangePageObj, ChnagePage, ListType, Loadings, SetLists } from "../../types";
import { asyncTry } from "../../utility";

export function setLists(list: ListType): SetLists {
  return {
    type: Action.SET_LISTS,

    payload: {
      list
    }
  };
}

function changeCurrentPage({ page, list, type }: ChangePageObj): ChnagePage {
  return {
    type: Action.CHANGE_PAGE,

    payload: {
      page,
      type,
      list
    }
  };
}

async function getNewPage(page: number, type: string) {
  return new Promise<any[]>(function (resolve) {
    setTimeout(function () {
      resolve([
        { id: 11, name: "saman nowresideh" },
        { id: 12, name: "saman nowresideh" },
        { id: 13, name: "saman nowresideh" },
        { id: 14, name: "saman nowresideh" },
        { id: 15, name: "saman nowresideh" },
        { id: 16, name: "saman nowresideh" },
        { id: 17, name: "saman nowresideh" },
        { id: 18, name: "saman nowresideh" },
        { id: 19, name: "saman nowresideh" },
        { id: 20, name: "saman nowresideh" }
      ]);
    }, 2000);
  });
}

export function changePage(page: number, type: string) {
  return async function (dispatch: Dispatch<AppActions>, getState: () => RootState) {
    const state = getState();
    const theList = state.listsReducer.lists[type];
    const current = theList.current;
    const list = theList.list?.[page];

    if (page === current) {
      return;
    }

    if (list && list.length) {
      return dispatch(changeCurrentPage({ page, type, list }));
    }

    if (state.requestProcessReducer.loading[Loadings.PAGINATION]) {
      return;
    }

    dispatch(loading(Loadings.PAGINATION));

    const { data, error } = await asyncTry<any[]>(getNewPage)(page, type);

    if (error) {
      return dispatch(clientError(error));
    }

    dispatch(success(Loadings.PAGINATION));
    dispatch(changeCurrentPage({ page, list: data as any[], type }));
  };
}
