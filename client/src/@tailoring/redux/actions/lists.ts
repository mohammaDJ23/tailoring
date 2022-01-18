import { Dispatch } from "react";
import { clientError, loading, success } from ".";
import { RootState } from "..";
import { listsApis } from "../../apis";
import { Rest } from "../../services";
import { Action, AppActions, ChangePageObj, ChnagePage, ListRes, ListType, Loadings, SetLists, ChangePageOptions } from "../../types";
import { asyncTry, getAccessToken } from "../../utility";

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

async function getNewPage(page: number, { type, query }: ChangePageOptions) {
  const accessToken = await getAccessToken();

  return new Rest().req<ListRes>(listsApis[type]({ accessToken, page, query }));
}

export function changePage(page: number, { type, query }: ChangePageOptions) {
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

    const { data, error } = await asyncTry<ListRes>(getNewPage)(page, { type, query });

    if (error) {
      return dispatch(clientError(error));
    }

    dispatch(success(Loadings.PAGINATION));
    dispatch(changeCurrentPage({ page, list: data!.list, type }));
  };
}
