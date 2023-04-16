'use strict';

module.exports = {
  env: {
    browser: false,
    es6: true
  },
  settings: {
    polyfills: [
    ]
  },
  extends: ['ash-nazg/sauron-node-script-overrides'],
  overrides: [
    {
      files: ['*.md/*.js'],
      rules: {
        'no-undef': 'off',
        'no-unused-vars': 'off',
        'import/extensions': 'off',
        'n/no-missing-require': 'off',
        strict: 'off'
      }
    }
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'script'
  },
  rules: {
  }
};
