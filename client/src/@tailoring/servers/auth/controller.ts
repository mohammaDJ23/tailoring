import { Bind } from "../../decorators";
import { ServerProps } from "../../types";
import { AuthService } from "./service";

class AuthContoller<T extends ServerProps = ServerProps> {
  constructor(private authService: AuthService<T>) {}

  @Bind()
  signup(arg: T) {
    return this.authService.signup(arg);
  }

  @Bind()
  login(arg: T) {
    return this.authService.login(arg);
  }
}

export const authController = new AuthContoller(new AuthService());
