import { Form, Input } from "../../types";

export class Shirt {
  [Form.CREATE_NEW_SHIRT] = {
    [Input.NAME]: {
      value: "",
      errorText: ""
    },

    [Input.HEIGHT]: {
      value: "",
      errorText: ""
    },

    [Input.SHOULDER]: {
      value: "",
      errorText: ""
    },

    [Input.SLEEVE]: {
      value: "",
      errorText: ""
    },

    [Input.SLEEVE_RING]: {
      value: "",
      errorText: ""
    },

    [Input.ARMPIT]: {
      value: "",
      errorText: ""
    },

    [Input.CHEST]: {
      value: "",
      errorText: ""
    },

    [Input.COLLAR]: {
      value: "",
      errorText: ""
    }
  };
}
