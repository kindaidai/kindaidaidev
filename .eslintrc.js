"use strict";

module.exports = {
    "env": {
      "browser": true
    },
    "extends": [
      "airbnb",
      "airbnb/hooks",
      "plugin:@typescript-eslint/eslint-recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
      "ecmaFeatures": {
          "jsx": true
      },
      "ecmaVersion": 2018,
      "sourceType": "module"
    },
    "plugins": [
      "@typescript-eslint"
    ],
    "rules": {
      "no-undef": "error"
    }
};
