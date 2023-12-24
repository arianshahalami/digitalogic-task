/* eslint-disable @typescript-eslint/no-unsafe-argument,@typescript-eslint/no-unsafe-assignment */
import styles from "./carousel.module.scss";
import { EventHandler, TouchEventHandler, useEffect, useState } from "react";
import type { PropsWithChildren } from "react";
import type { Product } from "@/types";
import { Button } from "@uikit/components";

type CarouselProps = {
   slidesPerView: number;
};

type CarouselContainerProps = {
   slidesPerView: number;
};

export const CarouselItem = (props: PropsWithChildren) => {
   const { children } = props;
   return <div className={styles["carousel-item"]}>{children}</div>;
};

const CarouselContainer = (props: PropsWithChildren<CarouselContainerProps>) => {
   const { children, slidesPerView } = props;
   const [currentIndex, setCurrentIndex] = useState(0);
   // @ts-expect-error children always have length
   const [length, setLength] = useState<number>(children.length);
   const [touchPosition, setTouchPosition] = useState<number | undefined>();

   useEffect(() => {
      // @ts-expect-error children always have length
      setLength(children.length);
   }, [children]);

   const onNextSlide = () => {
      if (currentIndex < length - slidesPerView) {
         setCurrentIndex((prevState) => prevState + 1);
      }
   };

   const onPrevSlide = () => {
      if (currentIndex > 0) {
         setCurrentIndex((prevState) => prevState - 1);
      }
   };

   // @ts-expect-error touchEvent exists
   const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
      const touchDown = e.touches[0].clientX as number;
      setTouchPosition(touchDown);
   };

   // @ts-expect-error touchEvent exists
   const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
      const touchDown = touchPosition;

      if (touchDown) {
         const currentTouch = e.touches[0].clientX as number;
         const diff = touchDown - currentTouch;

         if (diff > 7) {
            onPrevSlide();
         }

         if (diff < -7) {
            onNextSlide();
         }

         setTouchPosition(undefined);
      }
   };

   return (
      <div
         className={styles["carousel-container"]}
         style={{
            // @ts-expect-error valid syntax
            "--items-width": `${100 / props.slidesPerView}%`,
         }}
      >
         <div className={styles["carousel-wrapper"]}>
            {currentIndex > 0 && (
               <Button
                  className={[styles["nav"], styles["right-arrow"]].join(" ")}
                  onClick={onPrevSlide}
                  color="simple"
                  rounded
               >
                  <svg
                     width="20"
                     height="20"
                     viewBox="0 0 20 20"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path
                        d="M7.63098 16.072L12.6296 11.0733C13.22 10.483 13.22 9.51698 12.6296 8.92665L7.63098 3.92798"
                        stroke="#292D32"
                        stroke-width="1.75"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                     />
                  </svg>
               </Button>
            )}

            <div
               className={styles["carousel-content-wrapper"]}
               onTouchStart={handleTouchStart}
               onTouchMove={handleTouchMove}
            >
               <div
                  className={styles["carousel-content"]}
                  style={{
                     transform: `translateX(${
                        currentIndex * (100 / slidesPerView)
                     }%)`,
                  }}
               >
                  {children}
               </div>
            </div>

            {currentIndex < length - slidesPerView && (
               <Button
                  className={[styles["nav"], styles["left-arrow"]].join(" ")}
                  onClick={onNextSlide}
                  color="simple"
                  rounded
               >
                  <svg
                     width="20"
                     height="20"
                     viewBox="0 0 20 20"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg"
                     style={{ transform: "rotate(180deg)" }}
                  >
                     <path
                        d="M7.63098 16.072L12.6296 11.0733C13.22 10.483 13.22 9.51698 12.6296 8.92665L7.63098 3.92798"
                        stroke="#292D32"
                        stroke-width="1.75"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                     />
                  </svg>
               </Button>
            )}
         </div>
      </div>
   );
};

export const Carousel = (props: PropsWithChildren<CarouselProps>) => {
   const { children, slidesPerView } = props;

   return (
      <CarouselContainer slidesPerView={slidesPerView}>{children}</CarouselContainer>
   );
};
