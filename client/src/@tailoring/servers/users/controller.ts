import { Bind } from "../../decorators";
import { ServerProps } from "../../types";
import { UsersService } from "./service";

class UsersController<T extends ServerProps = ServerProps> {
  constructor(private usersService: UsersService<T>) {}

  @Bind()
  userShiitDetails(arg: T) {
    return this.usersService.userShirtDetails(arg);
  }

  @Bind()
  userPantsDetails(arg: T) {
    return this.usersService.userPantsDetails(arg);
  }

  @Bind()
  getPantsList(arg: T) {
    return this.usersService.getPantsList(arg);
  }

  @Bind()
  getShirtList(arg: T) {
    return this.usersService.getShirtList(arg);
  }
}

export const usersController = new UsersController(new UsersService());
