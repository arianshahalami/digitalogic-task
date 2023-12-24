/* eslint-disable @typescript-eslint/naming-convention */

import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const serverEnv = createEnv({
   server: {
      SECRET: z.string(),
      API_BASE_URL: z.string(),
      API_TIMEOUT: z.string(),
   },
   runtimeEnv: {
      SECRET: process.env.SECRET,
      API_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
      API_TIMEOUT: process.env.NEXT_PUBLIC_API_TIMEOUT,
   },
});
