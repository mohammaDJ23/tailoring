/**@type { use redirect } */

import { useRedirect } from "../shared/hooks";

export type RedirectPaths = "push" | "replace";

export type UserRedirect = ReturnType<typeof useRedirect>;
