// eslint.config.mts
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
import globals from 'globals';
import tseslint from 'typescript-eslint';

import simpleImportSort from 'eslint-plugin-simple-import-sort';
import unusedImports from 'eslint-plugin-unused-imports';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Lets us reuse shareable configs like "next/core-web-vitals" in flat config.
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default tseslint.config(
  // Global ignores (flat-config style)
  {
    ignores: [
      '**/.next/**',
      '**/out/**',
      '**/dist/**',
      '**/build/**',
      '**/coverage/**',
      '**/node_modules/**',
      '**/.turbo/**',
      '**/*.min.*',
      '**/generated/**',
    ],
  },

  // Baseline JS rules (Next's config doesn't include eslint:recommended)
  js.configs.recommended,

  // Next.js best-practice rules (includes React + React Hooks + Next rules)
  ...compat.extends('next/core-web-vitals', 'next/typescript'),

  // TypeScript ESLint (typed linting + stylistic rules)
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,

  // Project-wide defaults
  {
    files: ['**/*.{js,jsx,ts,tsx,mjs,cjs}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        // Typed linting without needing "project" everywhere
        // (TS-ESLint will pick up your tsconfig via project service)
        projectService: true,
        tsconfigRootDir: __dirname,
      },
    },
    plugins: {
      'simple-import-sort': simpleImportSort,
      'unused-imports': unusedImports,
    },
    rules: {
      /**
       * Imports / unused
       */
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',

      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],

      /**
       * Practical code-quality defaults
       */
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      eqeqeq: ['error', 'smart'],
      'object-shorthand': ['error', 'always'],
      'prefer-const': ['error', { destructuring: 'all' }],

      /**
       * TypeScript tweaks (typed linting can be strict; keep it useful)
       */
      '@typescript-eslint/consistent-type-imports': [
        'error',
        { prefer: 'type-imports', fixStyle: 'separate-type-imports' },
      ],
      '@typescript-eslint/no-misused-promises': [
        'error',
        { checksVoidReturn: { attributes: false } }, // avoids noise in JSX event handlers
      ],

      /**
       * Tailwind (works well with Tailwind v4; may require plugin updates)
       * If you use a different Tailwind ESLint plugin, swap this section accordingly.
       */
      'tailwindcss/classnames-order': 'warn',
      'tailwindcss/no-custom-classname': 'off',
      'tailwindcss/enforces-negative-arbitrary-values': 'warn',
      'tailwindcss/enforces-shorthand': 'warn',
    },
  },

  // TS-only file patterns
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      // Prefer TS for unused-vars; unused-imports handles imports
      'no-unused-vars': 'off',

      // Common Next.js/React TS ergonomics
      '@typescript-eslint/no-non-null-assertion': 'warn',
    },
  },

  // Declaration files: allow ambient patterns
  {
    files: ['**/*.d.ts'],
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/consistent-type-imports': 'off',
    },
  },

  // Tests: relax a few rules
  {
    files: ['**/*.{test,spec}.{js,jsx,ts,tsx}', '**/__tests__/**/*.{js,jsx,ts,tsx}'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      'no-console': 'off',
    },
  },

  // If you use Prettier, disable formatting-related ESLint rules:
  // (install: eslint-config-prettier)
  ...compat.extends('prettier'),
);
