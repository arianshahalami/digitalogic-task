module.exports = {
   env: {
      browser: true,
      es2021: true,
   },
   extends: ["next/core-web-vitals", "xo", "plugin:prettier/recommended"],
   overrides: [
      {
         env: {
            node: true,
         },
         files: [".eslintrc.{js,cjs}"],
         parserOptions: {
            sourceType: "script",
         },
      },
      {
         extends: [
            "next/core-web-vitals",
            "xo-typescript",
            "plugin:prettier/recommended",
         ],
         files: ["*.ts", "*.tsx"],
      },
   ],
   parserOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
   },
   plugins: ["react"],
   rules: {},
};
