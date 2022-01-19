import { Action, PantsObj, SetPantsDetials, SetShirtDetials, ShirtObj } from "../../types";

export function setPantsDetails(details: PantsObj): SetPantsDetials {
  return {
    type: Action.SET_PANTS_DETAILS,

    payload: {
      pants: details
    }
  };
}

export function setShirtDetails(details: ShirtObj): SetShirtDetials {
  return {
    type: Action.SET_SHIRT_DETAILS,

    payload: {
      shirt: details
    }
  };
}
