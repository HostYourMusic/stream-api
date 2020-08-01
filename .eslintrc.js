/* Host-Your-Music */

module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["@typescript-eslint", "jsx-a11y", "jest", "notice"],
  env: {
    node: true,
    jest: true,
    "jest/globals": true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
    "prettier/@typescript-eslint",
    "plugin:jest/recommended",
  ],
  rules: {
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
      },
    ],
    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "error",
    "jest/no-identical-title": "error",
    "jest/prefer-to-have-length": "warn",
    "jest/valid-expect": "warn",
    "jest/no-try-expect": 0,
    "@typescript-eslint/no-empty-function": 0,
    "@typescript-eslint/explicit-member-accessibility": 0,
    "no-console": ["error", { "allow": ["debug", "info", "warn", "error"] }],
    "notice/notice": [
      "error",
      {
        "template": "/* Host-Your-Music */\n"
      }
    ],
  },

};
