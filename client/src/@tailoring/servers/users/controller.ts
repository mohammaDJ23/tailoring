import { Bind } from "../../decorators";
import { ServerProps } from "../../types";
import { UsersService } from "./service";

class UsersController<T extends ServerProps = ServerProps> {
  constructor(private usersService: UsersService<T>) {}

  @Bind()
  details(arg: T) {
    return this.usersService.details(arg);
  }

  @Bind()
  list(arg: T) {
    return this.usersService.list(arg);
  }
}

export const usersController = new UsersController(new UsersService());
