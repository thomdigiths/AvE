module.exports = {
  env: {
    jest: true,
    browser: true,
    'react-native/react-native': true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['react', 'react-native', 'prettier'],
  extends: [
    '@react-native-community',
    'standard',
    'standard-react',
    'prettier',
    'prettier/react',
  ],
  parserOptions: {
    sourceType: 'module',
    allowImportExportEverywhere: false,
    codeFrame: false,
  },
  globals: {
    __DEV__: true,
  },
  rules: {
    'node/no-deprecated-api': 'off',
    'quote-props': ['error', 'consistent'],
    'react-native/no-unused-styles': 1,
    'no-unused-expressions': 0,
    'no-multi-str': 0,
    'react-native/no-inline-styles': 2,
    'react-native/no-color-literals': 2,
    'prettier/prettier': 'error',
    'react/jsx-handler-names': 0,
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    camelcase: ['off'],
    'react/prop-types': [
      'error',
      { ignore: ['navigation', 'screenProps'], skipUndeclared: true },
    ],
  },
};
© 2020 GitHub, In