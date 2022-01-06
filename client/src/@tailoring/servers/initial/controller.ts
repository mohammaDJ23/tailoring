import { InitialService } from "./service";
import { Bind } from "../../decorators";
import { ServerProps } from "../../types";

class InitialController<T extends ServerProps = ServerProps> {
  constructor(private initialService: InitialService<T>) {}

  @Bind()
  initial(args: T) {
    return this.initialService.initial(args);
  }
}

export const initialController = new InitialController(new InitialService());
