module.exports = {
  root: true, // 将此配置设置为根配置
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended', // 使用 ESLint 推荐规则
    'plugin:vue/vue3-recommended', // 使用 Vue 3 推荐规则
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  rules: {
    'vue/multi-word-component-names': 'off', // 禁用多单词组件名称规则
    '@typescript-eslint/no-unused-vars': ['error', {
      'varsIgnorePattern': '^_',
      'argsIgnorePattern': '^_',
      'ignoreRestSiblings': true,
      'vars': 'all',
      'args': 'after-used',
      'caughtErrors': 'none',
      'destructuredArrayIgnorePattern': '^_'
    }],
    'vue/no-unused-components': 'off', // 禁用未使用组件的检查
  },
};
