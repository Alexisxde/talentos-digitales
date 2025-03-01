/** @type {import("prettier").Config} */
const config = {
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
  trailingComma: "none",
  arrowParens: "avoid",
  bracketSameLine: true,
  bracketSpacing: true,
  jsxSingleQuote: false,
  quoteProps: "as-needed",
  semi: false,
  singleQuote: false,
  tabWidth: 2,
  useTabs: true,
  objectWrap: "collapse",
};

export default config;
