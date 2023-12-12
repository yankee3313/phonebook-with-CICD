module.exports = {
  'env': {
    browser: true,
    es2021: true,
    node: true,
    'jest/globals': true,
    'cypress/globals': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:cypress/recommended'
  ],
  'overrides': [
    {
      'env': {
        'node': true
      },
      'files': [
        '.eslintrc.{js,cjs}'
      ],
      'parserOptions': {
        'sourceType': 'script'
      }
    }
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'plugins': [
    'react', 'jest', 'cypress'
  ],
  'rules': {
    'no-trailing-spaces': 'error',
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'never'
    ],
    'no-console': 0
  },
  'settings': {
    'react': {
      'version': 'detect'
    }
  }
}
