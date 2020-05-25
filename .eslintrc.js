"use strict";

module.exports = {
  env: {
    browser: true,
  },
  extends: [
    "airbnb",
    "airbnb/hooks",
    "plugin:@typescript-eslint/eslint-recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      tsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "prettier"],
  //  "off": 1, "warn: 2", "error: 3"
  // https://eslint.org/docs/user-guide/configuring#configuring-rules
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": ["warn", { extensions: [".js", ".jsx", ".ts", "tsx"] }],
    "no-undef": "error",
    "prettier/prettier": [
      "error",
      {
        singleQuote: true,
        semi: false,
        printWidth: 80,
        tabWidth: 2,
      },
    ],
  },
};
