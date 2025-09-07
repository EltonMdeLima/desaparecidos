module.exports = {
  root: true,
  extends: ['next/core-web-vitals', 'eslint:recommended', 'plugin:react/recommended', 'prettier'],
  parserOptions: { ecmaFeatures: { jsx: true } },
  rules: {
    // ajustes pessoais aqui
  },
  settings: { react: { version: 'detect' } },
};
