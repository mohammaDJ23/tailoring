import { GlobalObj, ReqInputObj, Server } from "../../types";

export const serverApis: GlobalObj<(data: GlobalObj<any>) => ReqInputObj> = {
  [Server.PANTS_LIST](data) {
    return {
      url: `/pants/list?page=${data.page}`,
      method: "GET",
      headers: {
        Authorization: `Bearer ${data.accessToken}`
      }
    };
  },

  [Server.SHIRT_LIST](data) {
    return {
      url: `/shirt/list?page=${data.page}`,
      method: "GET",
      headers: {
        Authorization: `Bearer ${data.accessToken}`
      }
    };
  },

  [Server.PANTS_DETAILS](data) {
    return {
      url: `/pants/details?id=${data.id}`,
      method: "GET",
      headers: {
        Authorization: `Bearer ${data.accessToken}`
      }
    };
  },

  [Server.SHIRT_DETAILS](data) {
    return {
      url: `/shirt/details?id=${data.id}`,
      method: "GET",
      headers: {
        Authorization: `Bearer ${data.accessToken}`
      }
    };
  }
};
