import { Bind } from "../../decorators";
import { ServerProps } from "../../types";
import { CreationService } from "./service";

class CreationContoller<T extends ServerProps = ServerProps> {
  constructor(private creationService: CreationService<T>) {}

  @Bind()
  pantsCreation(arg: T) {
    return this.creationService.pantsCreation(arg);
  }

  @Bind()
  shirtCreation(arg: T) {
    return this.creationService.shirtCreation(arg);
  }
}

export const creationController = new CreationContoller(new CreationService());
