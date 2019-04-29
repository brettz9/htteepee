module.exports = {
    "env": {
        "browser": false,
        "es6": true
    },
    "settings": {
        "polyfills": [
        ]
    },
    "extends": ["ash-nazg/sauron"],
    "overrides": [
      {
        files: ["**/*.md"],
        rules: {
          "eol-last": "off",
          "no-console": "off",
          "no-undef": "off",
          "no-unused-vars": "off",
          "padded-blocks": "off",
          "import/unambiguous": "off",
          "import/no-unresolved": "off",
          "node/no-missing-import": "off",
          "strict": "off"
        }
      }
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "script"
    },
    "rules": {
      "import/no-commonjs": "off",
      "padded-blocks": "off"
    }
};
