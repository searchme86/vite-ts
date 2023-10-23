module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/typescript",
    "plugin:import/recommended",
    "plugin:prettier/recommended",
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "prettier"],
  rules: {
    "no-var": "error",
    "block-scoped-var": "error",
    "no-unused-vars": "error",
    "no-undef": ["error", {typeof: true}],
    "prefer-const": "off",
    "no-shadow": [
      "error",
      {
        builtinGlobals: true,
        hoist: "functions",
      },
    ],
    "no-use-before-define": [
      "error",
      {
        functions: true,
        classes: true,
        variables: true,
      },
    ],
    "no-undef-init": "error",
    "prefer-arrow-callback": [
      "warn",
      {
        allowNamedFunctions: true,
        allowUnboundThis: false,
      },
    ],
    "no-duplicate-imports": "error",
    "no-console": ["warn", {allow: ["warn", "error"]}],
    "no-multiple-empty-lines": "error",
    "import/no-extraneous-dependencies": ["warn", {devDependencies: true}],
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".css", ".json"],
    },
    "import/resolver": {
      typescript: {},
    },
  },
  root: true,
};
