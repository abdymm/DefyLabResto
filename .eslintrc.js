const commonPath = './src/common/';
const featuresPath = './src/features/';

module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:react-svg/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['react', 'module-resolver', 'import', 'react-svg'],
  rules: {
    semi: [2, 'never'],
    'import/no-cycle': 'off',
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, {extensions: ['.js', '.jsx', '.svg']}],
    'brace-style': ['error', '1tbs'],
    'react/prop-types': 'off',
    'react/display-name': 'off',
    'no-console': 'error',
    'import/named': 2,
    'import/namespace': 2,
    'import/default': 2,
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'import/export': 2,
    'import/order': [
      'warn',
      {
        'newlines-between': 'never',
        alphabetize: {
          order: 'asc',
          caseInsensitive: false,
        },
      },
    ],
    'sort-imports': ['warn', {ignoreDeclarationSort: true}],
    'react-svg/no-unused-ids-in-svg': 2,
    'react-svg/no-unused-empty-tag-in-svg': 2,
    'react-svg/no-metadata-in-svg': 2,
    'global-require': 0,
    'no-use-before-define': ['error', {variables: false}],
    'import/no-self-import': 'error',
    'import/first': 'error',
  },
  parser: 'babel-eslint',
  globals: {
    __DEV__: 'readonly',
  },
};
