import { useGetAllProducts } from "@/hooks";
import { ProductSliderSection } from "./components/product-slider-section.component";

export const HomeView = () => {
   const products = useGetAllProducts({ limit: 13 });

   return (
      <>
         <ProductSliderSection items={products ?? []} />
      </>
   );
};
