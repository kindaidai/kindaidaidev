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
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "prettier"],
  //  "off": 1, "warn: 2", "error: 3"
  // https://eslint.org/docs/user-guide/configuring#configuring-rules
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [
      "warn",
      { extensions: [".js", ".jsx", ".ts", "tsx"] },
    ],
    "react/jsx-props-no-spreading": "off",
    "react/jsx-one-expression-per-line": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "no-undef": "error",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "prettier/prettier": [
      "error",
      {
        singleQuote: true,
        semi: false,
        printWidth: 80,
        tabWidth: 2,
        endOfLine: "auto",
      },
    ],
  },
  settings: {
    "import/core-modules": ["styled-jsx/css"],
    "import/extensions": [".js", ".jsx", ".ts", ".tsx"],
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
};
