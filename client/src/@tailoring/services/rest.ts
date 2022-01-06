import { Http } from "../models";
import { FetchInputObj, Message, ReqInputObj } from "../types";

class Request {
  protected fetch<T extends FetchInputObj, K extends Promise<Response>>({ url, ...rest }: T): K {
    return fetch(url, rest) as K;
  }
}

export class Rest extends Request {
  public async req<T extends unknown, K extends ReqInputObj = ReqInputObj>(arg: K): Promise<T> {
    const response = await this.fetch(arg);
    const responseData = await response.json();

    if (!response.ok) {
      const message = responseData.message || Message.CODE_ONE;

      throw new Http(message);
    }

    return responseData;
  }
}
