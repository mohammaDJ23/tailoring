import { CtxOrReq } from "next-auth/client/_utils";
import { getSession } from "next-auth/react";

export async function getAccessToken(context?: CtxOrReq) {
  const session = await getSession(context);

  return session?.user?.accessToken;
}
