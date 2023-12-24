import type { PropsWithChildren } from "react";
import { Button } from "@uikit/components";
import Link from "next/link";

import styles from "./root.module.scss";
import { useRouter } from "next/router";
import { useColorMode } from "@/hooks";
import { useTranslation } from "next-i18next";

export const RootLayout = (props: PropsWithChildren) => {
   const { children } = props;

   const { locale } = useRouter();
   const { toggleColorMode } = useColorMode();
   const { t, i18n } = useTranslation("common");

   return (
      <div className={styles.container}>
         <header className={styles.header}>
            <Button color="primary" onClick={toggleColorMode}>
               {t("toggleColorMode")}
            </Button>
            <Link href="/" locale={locale === "fa" ? "en" : "fa"}>
               <Button color="primary">{t("toggleLanguage")}</Button>
            </Link>
         </header>
         <main>{children}</main>
      </div>
   );
};
