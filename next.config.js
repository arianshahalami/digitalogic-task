/** @type {import("next").NextConfig} */
const { i18n } = require("./next-i18next.config.js");
const path = require("path");

const nextConfig = {
   reactStrictMode: true,
   images: {
      remotePatterns: [
         {
            protocol: "https",
            hostname: "fakestoreapi.com",
            port: "",
            pathname: "/img/**",
         },
      ],
   },
   sassOptions: {
      includePaths: [path.join(__dirname, "ui-kit/design-system")],
      prependData: `
    @import "./mixins/index.scss";
    `,
   },
   i18n,
};

module.exports = nextConfig;
