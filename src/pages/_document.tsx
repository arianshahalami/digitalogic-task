import { Html, Head, Main, NextScript } from "next/document";
import { useEffect, useState } from "react";
import { useColorMode } from "@/hooks";

export default function Document(props: any) {
   const { colorMode } = useColorMode();

   return (
      <Html
         data-theme={colorMode}
         dir={props.__NEXT_DATA__.locale === "en" ? "ltr" : "rtl"}
      >
         <Head />
         <body>
            <Main />
            <NextScript />
         </body>
      </Html>
   );
}
