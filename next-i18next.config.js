/** @type import("next").I18NConfig */
const i18n = {
   locales: ["fa", "en"],
   defaultLocale: "fa",
   ns: ["pages", "common"],
   localeDetection: true,
};

/** @type import("next-i18next").UserConfig */
const next18nextConfig = {
   i18n,
   keySeparator: ".",
   nsSeparator: ":",
   defaultNS: ["common"],
   localeExtension: "json",
   localeStructure: "{{lng}}/{{ns}}",
   localePath:
      typeof window === "undefined"
         ? require("path").resolve("./public/locales")
         : "/locales",
   reloadOnPrerender: process.env.NODE_ENV === "development",
};

module.exports = next18nextConfig;
