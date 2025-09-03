import js from "@eslint/js";

export default [
  {
    ignores: ["**/node_modules/**", "**/dist/**", "**/.next/**"],
  },
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: {
    },
    rules: {},
  },
]; 