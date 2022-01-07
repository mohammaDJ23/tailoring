import { signup, login } from "../../models";
import { setForms } from "../../redux/actions";
import { ServerProps } from "../../types";

export class AuthService<T extends ServerProps> {
  async signup({ store }: T) {
    store.dispatch(setForms([signup]));
  }

  async login({ store }: T) {
    store.dispatch(setForms([login]));
  }
}
