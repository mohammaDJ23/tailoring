import { GlobalObj } from ".";

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

export interface ListObj {
  list: { [key: number]: any[] };
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
