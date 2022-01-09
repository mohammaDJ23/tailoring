import { ServerProps } from "../../types";

export class EditService<T extends ServerProps> {
  async editPants({}: T) {}

  async editShirt({}: T) {}
}
