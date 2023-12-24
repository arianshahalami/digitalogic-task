/* eslint-disable @typescript-eslint/naming-convention */

import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const clientEnv = createEnv({
   client: {
      NEXT_PUBLIC_BASE_URL: z.string(),
      NEXT_PUBLIC_API_TIMEOUT: z.string(),
   },
   runtimeEnv: {
      NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
      NEXT_PUBLIC_API_TIMEOUT: process.env.NEXT_PUBLIC_API_TIMEOUT,
   },
});
