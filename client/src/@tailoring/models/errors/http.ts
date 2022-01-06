export class Http extends Error {
  constructor(public message: string) {
    super(message);
  }
}
