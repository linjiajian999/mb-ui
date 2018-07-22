module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/typescript'
  ],
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'no-eval': 'error',
    'brace-style': [
      'error',
      '1tbs',
      {
        allowSingleLine: true
      }
    ],
    camelcase: 'error',
    'multiline-ternary': [
      'error',
      'always'
    ],
    'no-multiple-empty-lines': ['error', { 'max': 1 }],
    'no-new-object': "error",
    'no-new-wrappers': 'error',
    'no-plusplus': ['error', { 'allowForLoopAfterthoughts': true }],
    'no-script-url': 'error',
    'no-trailing-spaces': [
      'error',
      {
        ignoreComments: true
      }
    ],
    'no-undefined': 'error',
    'no-undef-init': 'error',
    'no-var': 'error',
    'no-whitespace-before-property': 'error',
    'prefer-rest-params': 'error',
    'semi-spacing': 'error',
    'space-infix-ops': 'error',
    semi: [
      'error',
      'never'
    ],
    'semi-style': [
      'error',
      'first'
    ],
    'arrow-spacing': [
      'error',
      {
        before: true,
        after: true
      }
    ],
    'one-var': [
      'error',
      'never'
    ],
    'vue/attribute-hyphenation': [
      'error',
      'always'
    ],
    'vue/html-end-tags': 'error',
    'vue/html-indent': [
      'error',
      2
    ],
    'vue/require-default-prop': 'error',
    'vue/require-prop-types': 'error',
    'vue/attributes-order': 'error',
    'vue/html-quotes': [
      'error',
      'double'
    ],
    // 'vue/order-in-components': 'error'
  }
}
