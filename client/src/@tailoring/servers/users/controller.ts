import { Bind } from "../../decorators";
import { Auth } from "../../guards/auth";
import { ServerProps } from "../../types";
import { UsersService } from "./service";

class UsersController<T extends ServerProps = ServerProps> {
  constructor(private usersService: UsersService<T>) {}

  @Bind()
  @Auth()
  userShiitDetails(arg: T) {
    return this.usersService.userShirtDetails(arg);
  }

  @Bind()
  @Auth()
  userPantsDetails(arg: T) {
    return this.usersService.userPantsDetails(arg);
  }

  @Bind()
  @Auth()
  getPantsList(arg: T) {
    return this.usersService.getPantsList(arg);
  }

  @Bind()
  @Auth()
  getShirtList(arg: T) {
    return this.usersService.getShirtList(arg);
  }
}

export const usersController = new UsersController(new UsersService());
