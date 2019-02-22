module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'airbnb-base',
    'plugin:vue/recommended'
  ],
  plugins: [
    'vue',
    'html',
  ],
  // add your custom rules here
  rules: {
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'vue/no-parsing-error': 'off',
    'no-restricted-syntax': 'off',
    'no-unused-expressions': 'off',
    'radix': 'off',
    'max-len': 'off',
    'no-param-reassign': ['error', { 'props': true, 'ignorePropertyModificationsFor': ['context'] }],
    'no-param-reassign': ['error', { 'props': true, 'ignorePropertyModificationsFor': ['state', 'getters'] }],
    'no-shadow': ['error', { 'allow': ['state', 'getters'] }],
  },
}
