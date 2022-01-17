import { Bind } from "../../decorators";
import { ExistJwt } from "../../guards/exist-jwt";
import { ServerProps } from "../../types";
import { AuthService } from "./service";

class AuthContoller<T extends ServerProps = ServerProps> {
  constructor(private authService: AuthService<T>) {}

  @Bind()
  @ExistJwt()
  signup(arg: T) {
    return this.authService.signup(arg);
  }

  @Bind()
  @ExistJwt()
  login(arg: T) {
    return this.authService.login(arg);
  }
}

export const authController = new AuthContoller(new AuthService());
