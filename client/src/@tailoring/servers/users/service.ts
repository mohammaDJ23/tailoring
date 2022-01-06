import { ServerProps } from "../../types";

export class UsersService<T extends ServerProps> {
  async details({ store, context }: T) {}

  async list({ store, context }: T) {}
}
