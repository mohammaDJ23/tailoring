import { GlobalObj, Input } from ".";

/**@type { request process } */

export interface RequestProcessObj {
  loading: GlobalObj<boolean>;

  errors: {
    server?: string;
    client?: string;
  };
}

/**@type { form } */

interface InputObj<T extends unknown = unknown> {
  value: T;
  errorText?: string;
}

export interface FormObj<T extends unknown = unknown> {
  forms: GlobalObj<GlobalObj<InputObj>>;
  data: T;
}

/**@type { enabling element } */

export interface EnablingElementObj {
  elementName: string;
}

/**@type { lists } */

export interface ListObj<T extends any[] = any[]> {
  list: { [key: number]: T };
  max: number;
  current: number;
}

export type ListType = GlobalObj<ListObj>;

export interface ListsObj {
  lists: ListType;
}

/**@type { search query } */

export interface SearchQueryObj {
  query: string;
}

/**@type { details } */

export interface PantsObj {
  [Input.ID]: number;
  [Input.NAME]: string;
  [Input.PHONE]: string;
  [Input.HEIGHT]: number;
  [Input.WAIST]: number;
  [Input.SEAT]: number;
  [Input.THIGHT]: number;
  [Input.KNEE]: number;
  [Input.PANT_SLIPPER]: number;
  [Input.HIP]: number;
  [Input.CREATED_AT]: Date;
  [Input.UPDATED_AT]: Date;
}

export interface ShirtObj {
  [Input.ID]: number;
  [Input.NAME]: string;
  [Input.PHONE]: string;
  [Input.HEIGHT]: number;
  [Input.SHOULDER]: number;
  [Input.SLEEVE]: number;
  [Input.SLEEVE_RING]: number;
  [Input.ARMPIT]: number;
  [Input.CHEST]: number;
  [Input.COLLAR]: number;
  [Input.CREATED_AT]: Date;
  [Input.UPDATED_AT]: Date;
}

export interface DetailsObj {
  pants?: PantsObj;
  shirt?: ShirtObj;
}
