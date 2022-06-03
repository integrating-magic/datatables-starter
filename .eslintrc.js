module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["standard"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "comma-dangle": ["warn", "never"],
    semi: ["warn", "never"],
    "no-var": "warn",
    quotes: ["warn", "double"],
    "no-unused-expressions": "warn",
    "no-undef": "off",
  },
};
