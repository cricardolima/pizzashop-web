const { FlatCompat } = require('@eslint/eslintrc');

const compat = new FlatCompat();

module.exports = [
  ...compat.config({
    extends: ['@rocketseat/eslint-config/react'],
    plugins: ['simple-import-sort'],
    rules: {
      'simple-import-sort/imports': 'error',
    },
  }),
];
