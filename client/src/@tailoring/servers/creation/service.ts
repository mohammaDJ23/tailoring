import { ServerProps } from "../../types";

export class CreationService<T extends ServerProps> {
  async pantsCreation({ store, context }: T) {}

  async shirtCreation({ store, context }: T) {}
}
