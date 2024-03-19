/* eslint-env node */
module.exports = {
  root: true,
  extends: ['airbnb-base', 'plugin:vue/vue3-essential'],
  parser: 'vue-eslint-parser',
  rules: {
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
};
