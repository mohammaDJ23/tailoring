import { Dispatch } from "react";
import { RootState } from "..";
import { Action, AppActions, ChangeInput, ChangeInputObj, GlobalObj, InputObj, SetForms } from "../../types";

export function changeInput({ form, input, value }: ChangeInputObj): ChangeInput {
  return {
    type: Action.CHANGE_INPUT,

    payload: {
      form,
      input,
      value
    }
  };
}

export function setForms(forms: GlobalObj<GlobalObj<InputObj>>[]): SetForms {
  return {
    type: Action.SET_FOMRS,

    payload: {
      forms
    }
  };
}

export function formSubmit(form: string) {
  return function (dispatch: Dispatch<AppActions>, getState: () => RootState) {};
}
