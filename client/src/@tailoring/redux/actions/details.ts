import { Action, DetailsObj, SetPantsDetials, SetShirtDetials } from "../../types";

export function setPantsDetails(details: DetailsObj["pants"]): SetPantsDetials {
  return {
    type: Action.SET_PANTS_DETAILS,

    payload: {
      pants: details
    }
  };
}

export function setShirtDetails(details: DetailsObj["shirt"]): SetShirtDetials {
  return {
    type: Action.SET_SHIRT_DETAILS,

    payload: {
      shirt: details
    }
  };
}
