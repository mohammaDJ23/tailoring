import { Code } from "../../types";

export class TempRedirect extends Error {
  code: number;
  path: string;

  constructor(path: string) {
    super("redirecting to another page for some reason.");

    this.code = Code.TEMP_REDIRECT;
    this.path = path;
  }
}
