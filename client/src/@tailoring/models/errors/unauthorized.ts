import { Code, Page } from "../../types";

export class Unauthorized extends Error {
  code: number;
  path: string;

  constructor() {
    super("Unauthorized.");

    this.code = Code.UNAUTHORIZED;
    this.path = Page.LOGIN;
  }
}
