import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { QueryClient, QueryClientProvider } from "react-query";
import { appWithTranslation } from "next-i18next";
import { RootLayout } from "@/layout";

import { baseFont } from "@/configs";
import type { AppProps } from "next/app";

import "@/styles/main.scss";

function App({ Component, pageProps }: AppProps) {
   const [queryClient] = useState(() => new QueryClient());
   const router = useRouter();

   // Sets html direction by locale change
   useEffect(() => {
      // Listen for route changes to update the HTML direction
      const handleRouteChange = () => {
         const locale = router.locale ?? "en";
         document.documentElement.setAttribute(
            "dir",
            locale === "en" ? "ltr" : "rtl",
         );
      };

      router.events.on("routeChangeComplete", handleRouteChange);

      return () => {
         router.events.off("routeChangeComplete", handleRouteChange);
      };
   }, [router.events, router.locale]);

   return (
      <>
         <style
            dangerouslySetInnerHTML={{
               __html: `
        :root {
          --font-base: ${baseFont.style.fontFamily};
        }`,
            }}
         />

         <QueryClientProvider client={queryClient}>
            <RootLayout>
               <Component {...pageProps} />
            </RootLayout>
         </QueryClientProvider>
      </>
   );
}

export default appWithTranslation(App);
