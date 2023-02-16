module.exports = {
  syntax: "postcss-scss",
  plugins: [
    require("@csstools/postcss-sass"),
    require("postcss-preset-env"),
    require("postcss-sort-media-queries")({ sort: "desktop-first" }),
  ],
};
