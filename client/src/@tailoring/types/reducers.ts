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
