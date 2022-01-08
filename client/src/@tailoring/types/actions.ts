import { Action, GlobalObj, InputObj } from ".";

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
  form: string;
  input: string;
  value: string;
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
