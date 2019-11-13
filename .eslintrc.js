module.exports = {
  env: {
    es6: true,
  },
  extends: ['airbnb', 'prettier', 'prettier/react'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEV__: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier', 'import'],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.jsx', '.js'],
      },
    ],
    'import/prefer-default-export': 0,
    // 'no-param-reassign': 0,
    // 'no-console': 0,
    // 'no-use-before-define': 0,
    // 'no-underscore-dangle': 0,
    'react/jsx-props-no-spreading': 0,
    'react/forbid-prop-types': 0,
    'react/require-default-props': 0,
  },
  settings: {
    'import/resolver': {
      'babel-plugin-root-import': { rootPathSuffix: 'src' },
    },
  },
};
