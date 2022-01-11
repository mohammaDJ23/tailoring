import { Action, DetailsActions, DetailsObj, SetPantsDetials, SetShirtDetials } from "../../types";

const initialState: DetailsObj = {};

function setPantsDetails(state: DetailsObj, action: SetPantsDetials): DetailsObj {
  const { pants } = action.payload;

  return {
    ...state,

    pants
  };
}

function setShirtDetails(state: DetailsObj, action: SetShirtDetials): DetailsObj {
  const { shirt } = action.payload;

  return {
    ...state,

    shirt
  };
}

export function reducer(state: DetailsObj = initialState, action: DetailsActions): DetailsObj {
  switch (action.type) {
    case Action.SET_PANTS_DETAILS:
      return setPantsDetails(state, action);

    case Action.SET_SHIRT_DETAILS:
      return setShirtDetails(state, action);

    default:
      return state;
  }
}
