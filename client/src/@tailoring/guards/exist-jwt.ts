import { getSession } from "next-auth/react";
import { TempRedirect } from "../models";
import { Page, ServerProps } from "../types";

export function ExistJwt() {
  return function (target: any, name: string, descriptor: PropertyDescriptor) {
    const val = descriptor.value;

    descriptor.value = async function (arg: ServerProps) {
      const session = await getSession(arg.context);

      if (session?.user?.accessToken && session?.user?.expire && new Date() < new Date(session.user.expire)) {
        throw new TempRedirect(Page.PANTS_CREATION);
      }

      return val.call(this, arg);
    };
  };
}
