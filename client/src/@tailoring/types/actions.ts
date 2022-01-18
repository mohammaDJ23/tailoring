import { Action, DetailsObj, GlobalObj, InputObj, ListType } from ".";

/**@type { request process }  */

export interface Loading {
  type: Action.LOADING;

  payload: {
    loadingProcess: string;
  };
}

export interface ClientError<T = string> {
  type: Action.CLIENT_ERROR;

  payload: {
    error: T;
  };
}

export interface ServerError<T = string> {
  type: Action.SERVER_ERROR;

  payload: {
    error: T;
  };
}

export interface Success {
  type: Action.SUCCESS;

  payload: {
    loadingProcess: string;
  };
}

export type RequestProcessActions = Loading | ClientError | ServerError | Success;

/**@type { form } */

export interface ChangeInputObj {
  form: number;
  input: string;
  value: any;
}

export interface ChangeInput {
  type: Action.CHANGE_INPUT;
  payload: ChangeInputObj;
}

export interface SetForms {
  type: Action.SET_FOMRS;

  payload: {
    forms: GlobalObj<GlobalObj<InputObj>>[];
  };
}

export type FormActions = ChangeInput | SetForms;

/**@type { enabling element } */

export interface EnablingElement {
  type: Action.ENABLING_ELEMENT;

  payload: {
    elementName: string;
  };
}

export type EnablingElementActions = EnablingElement;

/**@type { lists } */

export interface ChangePageOptions {
  type: string;
  query?: string;
}

export interface SetLists {
  type: Action.SET_LISTS;

  payload: {
    list: ListType;
  };
}

export interface ChangePageObj {
  page: number;
  type: string;
  list: any[];
}

export interface ChnagePage {
  type: Action.CHANGE_PAGE;

  payload: {
    page: number;
    type: string;
    list: any[];
  };
}

export interface UpdateListObj {
  max: number;
  type: string;
  list: any[];
}

export interface UpdateList {
  type: Action.UPDATE_LIST;
  payload: UpdateListObj;
}

export type ListsActions = SetLists | ChnagePage | UpdateList;

/**@type { search query } */

export interface QueryResObj<T extends any = any> {
  list: T[];
  max: number;
}

export interface SearchQuery {
  type: Action.SEARCH_QUERY;

  payload: {
    query: string;
    type: string;
  };
}

export type SearchQueryActions = SearchQuery;

/**@type { details } */

export interface SetPantsDetials {
  type: Action.SET_PANTS_DETAILS;

  payload: {
    pants: DetailsObj["pants"];
  };
}

export interface SetShirtDetials {
  type: Action.SET_SHIRT_DETAILS;

  payload: {
    shirt: DetailsObj["shirt"];
  };
}

export type DetailsActions = SetPantsDetials | SetShirtDetials;
