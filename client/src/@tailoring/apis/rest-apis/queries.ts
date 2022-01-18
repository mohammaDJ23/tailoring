import { GlobalObj, List, ReqInputObj } from "../../types";

export const queriesApis: GlobalObj<(data: GlobalObj<any>) => ReqInputObj<any>> = {
  [List.PANTS](data) {
    return {
      url: `/pants/search?query=${data.query}`,
      method: "GET",
      headers: {
        Authorization: `Bearer ${data.accessToken}`
      }
    };
  },

  [List.SHIRT](data) {
    return {
      url: `/shirt/search?query=${data.query}`,
      method: "GET",
      headers: {
        Authorization: `Bearer ${data.accessToken}`
      }
    };
  }
};
