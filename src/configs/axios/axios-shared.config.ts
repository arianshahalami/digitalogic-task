import axios from "axios";
import { clientEnv } from "@/configs";
import { serverEnv } from "@/configs/env/server.env";

export const createSharedAxios = ({
   baseURL,
   timeout,
}: {
   baseURL: string;
   timeout: number;
}) => {
   const axiosConfig = {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      baseURL,
      timeout,
   };

   return axios.create(axiosConfig);
};
