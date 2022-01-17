import { Form, GlobalObj, ReqInputObj } from "../../types";

export const formApis: GlobalObj<(data: GlobalObj<any>, accessToken?: string | null) => ReqInputObj<any>> = {
  [Form.SIGNUP](data) {
    return {
      url: "/user/signup",
      method: "POST",
      data,
      headers: {
        "Content-Type": "application/json"
      }
    };
  },

  [Form.LOGIN](data) {
    return {
      url: "/user/login",
      method: "POST",
      data,
      headers: {
        "Content-Type": "application/json"
      }
    };
  },

  [Form.CREATE_NEW_PANTS](data, accessToken) {
    return {
      url: "/pants/create",
      method: "POST",
      data,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`
      }
    };
  },

  [Form.EDIT_PANTS](data, accessToken) {
    return {
      url: "/pants/edit",
      method: "PATCH",
      data,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`
      }
    };
  },

  [Form.CREATE_NEW_SHIRT](data, accessToken) {
    return {
      url: "/shirt/create",
      method: "POST",
      data,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`
      }
    };
  },

  [Form.EDIT_SHIRT](data, accessToken) {
    return {
      url: "/shirt/edit",
      method: "PATCH",
      data,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`
      }
    };
  }
};
