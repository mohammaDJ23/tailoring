import { Code, Message, Page } from "../../types";

export class Unauthorized extends Error {
  code: number;
  path: string;

  constructor() {
    super(Message.CODE_TWO);

    this.code = Code.UNAUTHORIZED;
    this.path = Page.LOGIN;
  }
}
