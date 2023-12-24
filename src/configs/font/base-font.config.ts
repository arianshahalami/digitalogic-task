import localFont from "next/font/local";

export const baseFont = localFont({
   src: [
      {
         path: "../../../public/fonts/iran-yekan/woff/IRANYekanXFaNum-UltraLight.woff",
         weight: "200",
      },
      {
         path: "../../../public/fonts/iran-yekan/woff/IRANYekanXFaNum-Light.woff",
         weight: "300",
      },
      {
         path: "../../../public/fonts/iran-yekan/woff/IRANYekanXFaNum-Regular.woff",
         weight: "400",
      },
      {
         path: "../../../public/fonts/iran-yekan/woff/IRANYekanXFaNum-Medium.woff",
         weight: "500",
      },
      {
         path: "../../../public/fonts/iran-yekan/woff/IRANYekanXFaNum-DemiBold.woff",
         weight: "600",
      },
      {
         path: "../../../public/fonts/iran-yekan/woff/IRANYekanXFaNum-Bold.woff",
         weight: "700",
      },
      {
         path: "../../../public/fonts/iran-yekan/woff/IRANYekanXFaNum-ExtraBold.woff",
         weight: "800",
      },
      {
         path: "../../../public/fonts/iran-yekan/woff/IRANYekanXFaNum-Black.woff",
         weight: "900",
      },

      {
         path: "../../../public/fonts/iran-yekan/woff2/IRANYekanXFaNum-UltraLight.woff2",
         weight: "200",
      },
      {
         path: "../../../public/fonts/iran-yekan/woff2/IRANYekanXFaNum-Light.woff2",
         weight: "300",
      },
      {
         path: "../../../public/fonts/iran-yekan/woff2/IRANYekanXFaNum-Regular.woff2",
         weight: "400",
      },
      {
         path: "../../../public/fonts/iran-yekan/woff2/IRANYekanXFaNum-Medium.woff2",
         weight: "500",
      },
      {
         path: "../../../public/fonts/iran-yekan/woff2/IRANYekanXFaNum-DemiBold.woff2",
         weight: "600",
      },
      {
         path: "../../../public/fonts/iran-yekan/woff2/IRANYekanXFaNum-Bold.woff2",
         weight: "700",
      },
      {
         path: "../../../public/fonts/iran-yekan/woff2/IRANYekanXFaNum-ExtraBold.woff2",
         weight: "800",
      },
      {
         path: "../../../public/fonts/iran-yekan/woff2/IRANYekanXFaNum-Black.woff2",
         weight: "900",
      },
   ],
   variable: "--base-font",
   fallback: ["Segoe UI", "Roboto", "Helvetica Neue", "sans-serif"],
});
