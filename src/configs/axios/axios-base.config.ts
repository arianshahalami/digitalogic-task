import { clientEnv } from "@/configs";
import { createSharedAxios } from "./axios-shared.config";
import { serverEnv } from "@/configs/env/server.env";

const isServer = typeof window === "undefined";
export const axiosBaseConfig = createSharedAxios({
   // eslint-disable-next-line @typescript-eslint/naming-convention
   baseURL: isServer ? serverEnv.API_BASE_URL : clientEnv.NEXT_PUBLIC_BASE_URL,
   timeout: isServer
      ? Number(serverEnv.API_TIMEOUT)
      : Number(clientEnv.NEXT_PUBLIC_API_TIMEOUT),
});
