import { useTranslation } from "next-i18next";
import Image from "next/image";
import { Card, CarouselItem, Carousel, Button } from "@uikit/components";

import type { Product } from "@/types";

import styles from "./product-slider.module.scss";

type Props = {
   items: Product[];
};
const ProductSliderItem = ({ productDetails }: { productDetails: Product }) => {
   return (
      <Card className={styles["product-slider-item"]}>
         <Image
            src={"/images/product-1.png"}
            width={80}
            height={80}
            alt={productDetails.title}
            className={styles["product-slider-item-banner"]}
         />
         <div className={styles["product-slider-item-banner-bg"]}></div>
         <h1 className={styles["product-slider-item-title"]}>موتور</h1>
         <p className={styles["product-slider-item-count"]}>1000+</p>
         <div className={styles["product-slider-item-btn-holder"]}>
            <Button color="primary">مشاهده</Button>
         </div>
      </Card>
   );
};

const ProductSlider = ({ products }: { products: Product[] }) => {
   return (
      <section className={styles["product-slider"]}>
         <Carousel slidesPerView={9}>
            {products.map((product) => (
               <CarouselItem key={product.id}>
                  <ProductSliderItem productDetails={product} />
               </CarouselItem>
            ))}
         </Carousel>
      </section>
   );
};

export const ProductSliderSection = (props: Props) => {
   const { t, i18n } = useTranslation("pages");

   const { items } = props;

   return (
      <>
         <section className={styles["title-box"]}>
            <span className={styles["title-image"]} />
            <div>
               <h1>
                  <span className={styles["main-title"]}>
                     {t("home.products_slider.main_title")}
                  </span>
                  <span className={styles["sub-title"]}>
                     {t("home.products_slider.sub_title")}
                  </span>
               </h1>

               <p>{t("home.products_slider.description")}</p>
            </div>
         </section>

         <ProductSlider products={items} />
      </>
   );
};
