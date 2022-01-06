import { Action, ChangeInput, FormActions, FormObj, GlobalObj, InputObj, SetForms } from "../../types";

const initialState: FormObj = {
  forms: {},
  data: {}
};

function changeInput<T extends FormObj, K extends ChangeInput>(state: T, action: K): T {
  const { form, input, value } = action.payload;

  return {
    ...state,

    forms: {
      ...state.forms,

      [form]: {
        ...state.forms[form],

        [input]: {
          ...state.forms[form][input],

          value
        }
      }
    }
  };
}

function setForms<T extends FormObj, K extends SetForms>(state: T, action: K): T {
  let { forms: receivedForms } = action.payload;

  const forms: GlobalObj<GlobalObj<InputObj>> = {};

  for (let i = 0; i < receivedForms.length; i++) {
    for (const key in receivedForms[i]) {
      forms[key] = receivedForms[i][key];
    }
  }

  return {
    ...state,

    forms
  };
}

export function reducer(state: FormObj = initialState, action: FormActions) {
  switch (action.type) {
    case Action.CHANGE_INPUT:
      return changeInput(state, action);

    case Action.SET_FOMRS:
      return setForms(state, action);

    default:
      return state;
  }
}
