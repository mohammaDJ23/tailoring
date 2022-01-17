import { getSession } from "next-auth/react";
import { Unauthorized } from "../models";
import { ServerProps } from "../types";

export function Auth() {
  return function (target: any, name: string, descriptor: PropertyDescriptor) {
    const val = descriptor.value;

    descriptor.value = async function (arg: ServerProps) {
      const session = await getSession(arg.context);

      if (!session?.user?.accessToken || new Date() > new Date(session?.user?.expire!)) {
        throw new Unauthorized();
      }

      return val.call(this, arg);
    };
  };
}
