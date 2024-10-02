import ashNazg from 'eslint-config-ash-nazg';

export default [
  ...ashNazg(['sauron', 'node', 'script']),
  {
    files: ['*.mjs'],
    languageOptions: {
      // Bug with ash-nazg not setting for mjs files
      sourceType: 'module'
    }
  },
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
];
