import { Dispatch } from "redux";
import { loading, success, clientError } from ".";
import { RootState } from "..";
import { formApis } from "../../apis";
import { Rest } from "../../services";
import { Action, AppActions, ChangeInput, ChangeInputObj, Form, GlobalObj, InputObj, Loadings, Page, PantsObj, SetForms } from "../../types";
import { asyncTry, getAccessToken } from "../../utility";
import { signIn } from "next-auth/react";
import { ClientError } from "../../models";
import Router from "next/router";
import toast from "react-hot-toast";
import { showMessage } from "../../utility";

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

function signupAction() {
  return Router.push(Page.LOGIN);
}

async function loginAction(response: GlobalObj<any>) {
  const result = await signIn<"credentials">("credentials", {
    redirect: false,
    accessToken: response.accessToken,
    expire: response.expire
  });

  if (result!.error) {
    throw new ClientError(result!.error);
  }

  return Router.replace(Page.PANTS_CREATION);
}

function createNewPantsAction() {
  return Router.push(Page.USERS_PANTS_LIST);
}

function createNewShirtAction() {
  return Router.push(Page.USERS_SHIRT_LIST);
}

function editPantsAction(response: GlobalObj<any>) {
  return Router.push(`${Page.USER_PANTS_DETAILS}/${response.id}`);
}

function editShirtAction(response: GlobalObj<any>) {
  return Router.push(`${Page.USER_SHIRT_DETAILS}/${response.id}`);
}

async function actionsAcfterFormSubmit(form: number, response: GlobalObj<any>) {
  switch (form) {
    case Form.SIGNUP:
      return signupAction();

    case Form.LOGIN:
      return loginAction(response);

    case Form.CREATE_NEW_PANTS:
      return createNewPantsAction();

    case Form.CREATE_NEW_SHIRT:
      return createNewShirtAction();

    case Form.EDIT_PANTS:
      return editPantsAction(response);

    case Form.EDIT_SHIRT:
      return editShirtAction(response);

    default:
      return null;
  }
}

async function sendInformation(form: number, formInfo: GlobalObj<InputObj>) {
  const optimizedForm = formOptimization(formInfo);

  const accessToken = await getAccessToken();

  const response = await new Rest().req<GlobalObj<any>>(formApis[form](optimizedForm, accessToken));

  actionsAcfterFormSubmit(form, response);

  return response;
}

export function formSubmit(form: number) {
  return async function (dispatch: Dispatch<AppActions>, getState: () => RootState) {
    const state = getState();

    if (state.requestProcessReducer.loading[Loadings.FORM_SUBMITION]) {
      return;
    }

    dispatch(loading(Loadings.FORM_SUBMITION));

    const { data, error } = await asyncTry<GlobalObj<any>>(sendInformation)(form, state.formsReducer.forms[form]);

    if (error) {
      return dispatch(clientError(error));
    }

    toast.success(showMessage(form));

    dispatch(success(Loadings.FORM_SUBMITION));
  };
}
