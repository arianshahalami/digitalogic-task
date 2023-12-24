import { HomeView } from "@/modules";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Home() {
   return (
      <>
         <HomeView />
      </>
   );
}

export const getServerSideProps = async ({ locale }: { locale: string }) => ({
   props: {
      ...(await serverSideTranslations(locale, ["pages", "common"])),
   },
});
