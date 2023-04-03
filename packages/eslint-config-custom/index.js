module.exports = {
  'parser': '@typescript-eslint/parser',
  'plugins': [
    '@typescript-eslint'
  ],
  'extends': [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  'settings': {
    'import/extensions': [
      '.js',
      '.jsx',
      '.ts',
      '.tsx'
    ],
    'import/parsers': {
      '@typescript-eslint/parser': [
        '.ts',
        '.tsx'
      ]
    },
    'import/resolver': {
      'node': {
        'extensions': [
          '.js',
          '.jsx',
          '.ts',
          '.tsx'
        ]
      }
    }
  },
  'rules': {
    '@typescript-eslint/no-explicit-any': 'off',
    'capitalized-comments': 'off',
    'camelcase': [
      'error'
    ],
    'curly': [
      'error'
    ],
    'eqeqeq': [
      'error'
    ],
    'max-depth': [
      'error'
    ],
    'no-empty': [
      'error'
    ],
    'no-inline-comments': [
      'error'
    ],
    'no-var': [
      'error'
    ],
    'prefer-arrow-callback': [
      'error'
    ],
    'arrow-parens': [
      'error'
    ],
    'semi': [
      'error',
      'always'
    ],
    'no-await-in-loop': [
      'error'
    ],
    'quotes': [
      2,
      'single',
      'avoid-escape'
    ],
    'no-multiple-empty-lines': [
      'error',
      {
        'max': 1,
        'maxEOF': 0
      }
    ],
    'jsx-quotes': [
      'error',
      'prefer-single'
    ],
    '@typescript-eslint/ban-types': [
      'error',
      {
        'extendDefaults': true,
        'types': {
          '{}': false
        }
      }
    ]
  },
  'env': {
    'es6': true
  }
};
