import { Http, Unauthorized } from "../models";
import { Code, FetchInputObj, Message, ReqInputObj, ResponseDataObj } from "../types";

class Request {
  protected fetch<T extends FetchInputObj, K extends Promise<Response>>({ url, ...rest }: T): K {
    return fetch(`${process.env.REST_API_URL}${url}`, {
      body: JSON.stringify(rest.data),
      ...rest
    }) as K;
  }
}

export class Rest extends Request {
  public async req<T extends unknown = unknown, K extends ReqInputObj = ReqInputObj>(arg: K): Promise<T> {
    const response: Response = await this.fetch(arg);
    const responseData: ResponseDataObj = await response.json();

    if (!response.ok) {
      const { message, statusCode } = responseData.error || {};

      const parsedMessage = Array.isArray(message) ? message.join("  _  ") : message || Message.CODE_ONE;

      if (statusCode === Code.EXPIRATION) {
        throw new Unauthorized();
      }

      throw new Http(parsedMessage);
    }

    return responseData.data as T;
  }
}
