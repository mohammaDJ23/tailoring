export enum Page {
  INITIAL = "/",
  SIGNUP = "/auth/signup",
  LOGIN = "/auth/login",
  PANTS_CREATION = "/creation/pants",
  SHIRT_CREATION = "/creation/shirt",
  USERS_SHIRT_LIST = "/users/list/shirt",
  USERS_PANTS_LIST = "/users/list/pants",
  USER_SHIRT_DETAILS = "/users/details/shirt",
  USER_PANTS_DETAILS = "/users/details/pants",
  EDIT_PANTS = "/edit/pants",
  EDIT_SHIRT = "/edit/shirt"
}

export enum Server {
  SIGNUP,
  LOGIN,
  PANTS_CREATION,
  SHIRT_CREATION,
  USERS_LIST,
  USER_DETAILS
}

export enum Form {
  SIGNUP = "SIGNUP_FORM",
  LOGIN = "LOGIN_FORM",
  CREATE_NEW_PANTS = "CREATE_NEW_PANTS_FORM",
  CREATE_NEW_SHIRT = "CREATE_NEW_SHIRT_FORM"
}

export enum Input {
  PASSWORD = "password",
  EMAIL = "email",
  NAME = "name",
  HEIGHT = "height",
  SHOULDER = "shoulder",
  ARMPIT = "armpit",
  SLEEVE = "sleeve",
  CHEST = "chest",
  COLLAR = "collar",
  WAIST = "waist",
  THIGHT = "thight",
  KNEE = "knee",
  HIP = "hip",
  PHONE = "phone",
  SLEEVE_RING = "sleeveRing",
  SEAT = "seat",
  PANT_SLIPPER = "pantSlipper"
}

export enum Code {
  TEMP_REDIRECT = 304,
  UNAUTHORIZED = 403
}

export enum Message {
  CODE_ONE = "something went wrong."
}

export enum Action {
  LOADING,
  CLIENT_ERROR,
  SERVER_ERROR,
  SUCCESS,
  CHANGE_INPUT,
  FORM_SUBMIT,
  SET_FOMRS,
  ENABLING_ELEMENT,
  SET_LISTS,
  ENABLING_ITEM_MENU
}

export enum Element {
  NAVIGATION = "NAVIGATION"
}

export enum Loadings {
  FORM_SUBMITION = "FORM_SUBMITION"
}
