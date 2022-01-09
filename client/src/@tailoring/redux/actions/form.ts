import { Dispatch } from "redux";
import { loading, success, clientError } from ".";
import { RootState } from "..";
import { Action, AppActions, ChangeInput, ChangeInputObj, GlobalObj, InputObj, Loadings, SetForms } from "../../types";
import { asyncTry } from "../../utility";

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

function formOptimization(form: GlobalObj<InputObj>) {
  const optimizedForm: GlobalObj<any> = {};

  for (const key in form) {
    optimizedForm[key] = form[key].value;
  }

  return optimizedForm;
}

async function sendInformation(forms: GlobalObj<InputObj>) {
  const optimizedForm = formOptimization(forms);

  return {};
}

export function formSubmit(form: string) {
  return async function (dispatch: Dispatch<AppActions>, getState: () => RootState) {
    const state = getState();

    if (state.requestProcessReducer.loading[Loadings.FORM_SUBMITION]) {
      return;
    }

    dispatch(loading(Loadings.FORM_SUBMITION));

    const { data, error } = await asyncTry<{}>(sendInformation)(state.formsReducer.forms[form]);

    if (error) {
      return dispatch(clientError(error));
    }

    dispatch(success(Loadings.FORM_SUBMITION));

    console.log(data);
  };
}
