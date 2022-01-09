import { Bind } from "../../decorators";
import { ServerProps } from "../../types";
import { EditService } from "./service";

class EditController<T extends ServerProps = ServerProps> {
  constructor(private editSerive: EditService<T>) {}

  @Bind()
  editPants(arg: T) {
    return this.editSerive.editPants(arg);
  }

  @Bind()
  editShirt(arg: T) {
    return this.editSerive.editShirt(arg);
  }
}

export const editController = new EditController(new EditService());
