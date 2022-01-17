import { GlobalObj, List, ReqInputObj } from "../../types";

export const listsApis: GlobalObj<(data: GlobalObj<any>) => ReqInputObj> = {
  [List.PANTS](data) {
    return {
      url: `/pants/list?page=${data.page}`,
      method: "GET",
      headers: {
        Authorization: `Bearer ${data.accessToken}`
      }
    };
  },

  [List.SHIRT](data) {
    return {
      url: `/shirt/list?page=${data.page}`,
      method: "GET",
      headers: {
        Authorization: `Bearer ${data.accessToken}`
      }
    };
  }
};
