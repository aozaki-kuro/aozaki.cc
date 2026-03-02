import js from '@eslint/js'
import { defineConfig, globalIgnores } from 'eslint/config'
import astroPlugin from 'eslint-plugin-astro'
import prettierConfigRecommended from 'eslint-plugin-prettier/recommended'
import globals from 'globals'
import tseslint from 'typescript-eslint'

export default defineConfig([
  globalIgnores(['.astro/**', '.next/**', 'out/**', 'dist/**', 'build/**', 'node_modules/**']),

  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...astroPlugin.configs['flat/recommended'],
  prettierConfigRecommended,

  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,astro}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      eqeqeq: ['error', 'always', { null: 'ignore' }],
      curly: ['error', 'all'],
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      '@typescript-eslint/consistent-type-imports': ['warn', { prefer: 'type-imports' }],
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      // This project intentionally uses set:html for FontAwesome SVG output.
      'astro/no-set-html-directive': 'off',
    },
  },
  {
    files: ['**/*.astro'],
    rules: {
      'prettier/prettier': 'off',
    },
  },
])
