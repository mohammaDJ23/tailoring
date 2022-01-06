import { signup } from "../../models";
import { setForms } from "../../redux/actions";
import { ServerProps } from "../../types";

export class AuthService<T extends ServerProps> {
  async signup({ store, context }: T) {
    store.dispatch(setForms([signup]));
  }

  async login({ store, context }: T) {}
}
