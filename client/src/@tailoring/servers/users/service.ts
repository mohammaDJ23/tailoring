import { ServerProps } from "../../types";

export class UsersService<T extends ServerProps> {
  async userShiitDetails({}: T) {}

  async userPantsDetails({}: T) {}

  async getPantsList({}: T) {}

  async getShirtList({}: T) {}
}
