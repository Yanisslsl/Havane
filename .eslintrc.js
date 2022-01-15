module.exports = {
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  rules: {
    'import/no-unresolved': 0,
    // 'no-unused-vars': 0,
    // '@typescript-eslint/no-unused-vars': 2,
    // 'no-useless-constructor': 0,
    // '@typescript-eslint/no-useless-constructor': 2,
    'no-underscore-dangle': 0,
    'class-methods-use-this': 0,
    'no-undef': 0,
    'global-require': 0,

    // This one is debatable
    'no-restricted-syntax': 0,

    // Because it doesn't parse correct package.json
    'import/no-extraneous-dependencies': 0,

    // Because in this project the api return snake_case
    camelcase: 0,
    '@typescript-eslint/camelcase': 0,

    // Because we need that to mutate the state
    'no-param-reassign': 0,

    'no-continue': 0,
    'no-await-in-loop': 1,

    // This rules are dump
    'no-bitwise': 0,
    'no-plusplus': 0,
    'import/extensions': 0,

    // Some override needs empty functions
    '@typescript-eslint/no-empty-function': 0,

    // Fix rules conflict
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],

    semi: 'off',
    '@typescript-eslint/semi': ['error'],

    // @todo those should be enabled, disabled for debugging
    'no-console': 0,
    '@typescript-eslint/no-explicit-any': 0,

    'max-len': ['warn', 100],
  },
};

// {
//   "extends": "tslint-config-airbnb",
//   "rules": {
//     "semicolon": [
//       true,
//       "never"
//     ],
//     "import-name": false,
//     "no-increment-decrement": false,
//     "prefer-array-literal": false,
//     "function-name": [
//       true,
//       {
//         "function-regex": "^[a-z$][\\w\\d]+$",
//         "method-regex": "^_?[a-z$][\\w\\d]+$",
//         "private-method-regex": "^_[a-z$][\\w\\d]+$",
//         "protected-method-regex": "^_?[a-z$][\\w\\d]+$",
//         "static-method-regex": "^[a-z$][\\w\\d]+$"
//       }
//     ],
//     "variable-name": [
//       true,
//       "check-format",
//       "allow-leading-underscore"
//     ]
//   },
//   "linterOptions": {
//     "exclude": [
//       "node_modules/**"
//     ]
//   }
// }
