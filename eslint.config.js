import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import { fixupConfigRules } from "@eslint/compat";
import js from "@eslint/js";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default defineConfig([
  globalIgnores(["**/dist", "**/old", "playwright-report", "test-results"]),
  {
    files: ["**/*.{js,jsx}"],
    extends: [js.configs.recommended],
  },
  {
    files: ["src/**/*.{js,jsx}"],
    languageOptions: { globals: globals.browser },
    extends: [
      // React's rules still need the ESLint compatibility adapter.
      ...fixupConfigRules([react.configs.flat.recommended, react.configs.flat["jsx-runtime"]]),
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    settings: { react: { version: "detect" } },
    rules: { "react/prop-types": "off" },
  },
  {
    files: ["*.config.js", "tests/**/*.js"],
    languageOptions: { globals: globals.node },
  },
]);
