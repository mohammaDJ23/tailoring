import { Form, GlobalObj, Input, InputObj } from "../../types";

export class Login {
  [Form.LOGIN] = {
    [Input.EMAIL]: {
      value: "",
      errorText: ""
    },

    [Input.PASSWORD]: {
      value: "",
      errorText: ""
    }
  };
}
