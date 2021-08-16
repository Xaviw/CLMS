module.exports = {
  parser: "@typescript-eslint/parser", // 指定ESLint要使用的解析器
  parserOptions: {
    ecmaVersion: 2020, // 允许解析较新的ES特性
    sourceType: "module",
  },
  settings: {
    react: {
      version: "detect", // 告诉eslint-plugin-react自动检测要使用的React版本
    },
  },
  extends: [
    "plugin:angular/johnpapa", // 使用eslint-plugin-angular
    "plugin:@typescript-eslint/recommended", // 使用@typescript-eslint/eslint-plugin的推荐规则
    "prettier/@typescript-eslint", // 使用eslint-config-prettier来禁用@typescript-eslint/eslint-plugin中与prettier冲突的ESLint规则
    // 启用eslint-plugin-prettier和eslint-config-prettier。这会将prettier错误作为ESLint错误来展示。确保这个配置放到数组的最后。
    "plugin:prettier/recommended",
  ],
  rules: {
    // 自定义的ESLint规则，可以覆盖extends中的规则配置。
    // e.g. "@typescript-eslint/explicit-function-return-type": "off",
  },
};
