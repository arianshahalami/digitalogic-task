import { axiosBaseConfig } from "@/configs";
import type { ApiFilters, Product } from "@/types";

const getProductById = async (productId: number) => {
   const response = await axiosBaseConfig.get<Product>(`/products/${productId}}`);
   return response.data;
};

const getProducts = async (filters?: ApiFilters) => {
   const response = await axiosBaseConfig.get<Product[]>(`/products`, {
      params: filters,
   });
   return response.data;
};

export const productService = {
   getProductById,
   getProducts,
};
