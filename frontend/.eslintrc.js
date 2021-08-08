const path = require('path')

module.exports = {
  env: {
    browser: true,
    es2020: true,
    jest: true,
  },
  extends: 'airbnb',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'class-methods-use-this': 'off',
    'react/no-danger': 'off',
    'max-len': [
      'error',
      {
        code: 120,
      },
    ],
    semi: [
      'error',
      'never',
    ],
    'react/jsx-filename-extension': [
      1,
      {
        extensions: [
          '.js',
          '.jsx',
        ],
      },
    ],
    'jsx-a11y/anchor-is-valid': ['error', {
      components: ['Link'],
      specialLink: ['hrefLeft', 'hrefRight'],
      aspects: ['invalidHref', 'preferButton'],
    }],
    'import/prefer-default-export': 'off',
  },
  ignorePatterns: ['*.svg'],
  settings: {
    'import/resolver': {
      alias: [
        [
          '@locales',
          path.resolve(__dirname, 'locales'),
        ],
        [
          '@pages',
          path.resolve(__dirname, 'pages'),
        ],
        [
          '@public',
          path.resolve(__dirname, 'public'),
        ],
        [
          '@store',
          path.resolve(__dirname, 'store'),
        ],
        [
          '@data',
          path.resolve(__dirname, 'data'),
        ],
        [
          '@templates',
          path.resolve(__dirname, 'components/templates'),
        ],
        [
          '@organisms',
          path.resolve(__dirname, 'components/organisms'),
        ],
        [
          '@modals',
          path.resolve(__dirname, 'components/modals'),
        ],
        [
          '@molecules',
          path.resolve(__dirname, 'components/molecules'),
        ],
        [
          '@atoms',
          path.resolve(__dirname, 'components/atoms'),
        ],
        [
          '@styles',
          path.resolve(__dirname, 'styles'),
        ],
        [
          '@fonts',
          path.resolve(__dirname, 'fonts'),
        ],
        [
          '@utils',
          path.resolve(__dirname, 'utils'),
        ],
        [
          '@api',
          path.resolve(__dirname, 'api'),
        ],
      ],
    },
  },
}
