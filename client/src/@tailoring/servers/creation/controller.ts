import { Bind } from "../../decorators";
import { Auth } from "../../guards/auth";
import { ServerProps } from "../../types";
import { CreationService } from "./service";

class CreationContoller<T extends ServerProps = ServerProps> {
  constructor(private creationService: CreationService<T>) {}

  @Bind()
  @Auth()
  pantsCreation(arg: T) {
    return this.creationService.pantsCreation(arg);
  }

  @Bind()
  @Auth()
  shirtCreation(arg: T) {
    return this.creationService.shirtCreation(arg);
  }
}

export const creationController = new CreationContoller(new CreationService());
