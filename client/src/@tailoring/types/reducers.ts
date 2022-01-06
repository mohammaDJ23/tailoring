import { GlobalObj } from ".";

/**@type { request process } */

export interface RequestProcessObj {
  loading: boolean;
  error: string;
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
