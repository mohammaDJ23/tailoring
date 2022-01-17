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
  PANTS_LIST,
  SHIRT_LIST,
  PANTS_DETAILS,
  SHIRT_DETAILS
}

export enum Form {
  SIGNUP,
  LOGIN,
  CREATE_NEW_PANTS,
  CREATE_NEW_SHIRT,
  EDIT_PANTS,
  EDIT_SHIRT
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
  PANT_SLIPPER = "pantSlipper",
  ID = "id"
}

export enum Code {
  TEMP_REDIRECT = 304,
  UNAUTHORIZED = 403,
  EXPIRATION = 401
}

export enum Message {
  CODE_ONE = "something went wrong.",
  CODE_TWO = "Unauthorized.",
  CODE_THREE = "redirecting to another page for some reason."
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
  ENABLING_ITEM_MENU,
  SEARCH_QUERY,
  CHANGE_PAGE,
  UPDATE_LIST,
  SET_PANTS_DETAILS,
  SET_SHIRT_DETAILS
}

export enum Element {
  NAVIGATION = "NAVIGATION"
}

export enum Loadings {
  FORM_SUBMITION = "FORM_SUBMITION",
  QUERY = "QUERY",
  PAGINATION = "PAGINATION"
}

export enum List {
  PANTS = "PANTS",
  SHIRT = "SHIRT"
}
