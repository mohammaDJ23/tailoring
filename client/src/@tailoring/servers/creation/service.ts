import { pants } from "../../models";
import { setForms } from "../../redux/actions";
import { ServerProps } from "../../types";

export class CreationService<T extends ServerProps> {
  async pantsCreation({ store }: T) {
    store.dispatch(setForms([pants]));
  }

  async shirtCreation({ store }: T) {}
}
