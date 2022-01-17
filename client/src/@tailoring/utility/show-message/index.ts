import { Form } from "../../types";

export function showMessage(type: number | string) {
  switch (type) {
    case Form.LOGIN:
      return "You are logging in";

    case Form.SIGNUP:
      return "You are signing in";

    case Form.CREATE_NEW_PANTS:
      return "The new pant was created";

    case Form.CREATE_NEW_SHIRT:
      return "The new shirt was created";

    case Form.EDIT_PANTS:
      return "The pant was edited";

    case Form.EDIT_SHIRT:
      return "The shirt was edited";

    default:
      return "The process was successful";
  }
}
