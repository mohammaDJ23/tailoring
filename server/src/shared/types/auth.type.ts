import { ApiProperty } from '@nestjs/swagger';

export class LoginReturnObj {
  @ApiProperty()
  accessToken: String;

  @ApiProperty()
  expire: string;
}
