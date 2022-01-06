import { TempRedirect } from "../../models";
import { Page, ServerProps } from "../../types";

export class InitialService<T extends ServerProps> {
  async initial({ store, context }: T) {
    // throw new TempRedirect(Page.LOGIN);
  }
}
