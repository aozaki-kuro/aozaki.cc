import prettierRecommended from 'eslint-plugin-prettier/recommended'

export default [
  {
    files: ['**/*.{js,ts,astro}'],
    extends: ['eslint:recommended'],
  },
  prettierRecommended,
  {
    ignores: ['**/node_modules/**', 'dist/**', 'build/**', 'coverage/**', 'out/**'],
  },
]
