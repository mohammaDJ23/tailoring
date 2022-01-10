import { Code, Message } from "../../types";

export class TempRedirect extends Error {
  code: number;
  path: string;

  constructor(path: string) {
    super(Message.CODE_THREE);

    this.code = Code.TEMP_REDIRECT;
    this.path = path;
  }
}
