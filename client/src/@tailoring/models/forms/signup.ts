import { Form, Input } from "../../types";

export const signup = {
  [Form.SIGNUP]: {
    [Input.NAME]: {
      value: "",
      errorText: ""
    },

    [Input.EMAIL]: {
      value: "",
      errorText: ""
    },

    [Input.PASSWORD]: {
      value: "",
      errorText: ""
    }
  }
};
