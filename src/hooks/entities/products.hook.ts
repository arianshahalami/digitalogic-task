import { useQuery } from "react-query";
import { productService } from "@/services";
import { type ApiFilters } from "@/types";

export const useGetAllProducts = (filters?: ApiFilters) => {
   const { data } = useQuery(["products", filters], async () =>
      productService.getProducts(filters),
   );

   return data;
};
