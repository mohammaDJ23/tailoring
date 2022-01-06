import { Action, GlobalObj, InputObj } from ".";

/**@type { request process }  */

export interface Loading {
  type: Action.LOADING;
}

export interface Error<T = string> {
  type: Action.ERROR;

  payload: {
    error: T;
  };
}

export interface Success {
  type: Action.SUCCESS;
}

export type RequestProcessActions = Loading | Error | Success;

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
