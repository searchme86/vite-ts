/* eslint-env node */
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'plugin:import/recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'prettier', 'eslint'],
  rules: {
    quotes: ['error', 'single'],
    'no-duplicate-imports': 'error',
    'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
    'no-unused-vars': 'error',
    'no-multiple-empty-lines': 'error',
  },
  settings: {
    // 'import/resolver': {
    //   node: {},
    //   typescript: {
    //     directory: './src',
    //   },
    // },
    // 'import/parsers': { '@typescript-eslint/parser': '.ts' },
  },
  rules: {
    // 'import/order': [
    //   'error',
    //   {
    //     groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
    //     alphabetize: {
    //       order: 'asc',
    //       caseInsensitive: true,
    //     },
    //     'newlines-between': 'never',
    //   },
    // ],
    // 'import/no-unresolved': 'off',
    // 'import/export': 'off',
  },
  root: true,
};
