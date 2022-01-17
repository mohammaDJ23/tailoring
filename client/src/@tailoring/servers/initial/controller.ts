import { InitialService } from "./service";
import { Bind } from "../../decorators";
import { ServerProps } from "../../types";
import { Auth } from "../../guards/auth";

class InitialController<T extends ServerProps = ServerProps> {
  constructor(private initialService: InitialService<T>) {}

  @Bind()
  @Auth()
  initial(args: T) {
    return this.initialService.initial(args);
  }
}

export const initialController = new InitialController(new InitialService());
