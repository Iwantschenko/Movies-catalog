const { defineConfig, globalIgnores } = require('eslint/config');

const tsParser = require('@typescript-eslint/parser');
const tsPlugin = require('@typescript-eslint/eslint-plugin');
const reactPlugin = require('eslint-plugin-react');
const reactHooksPlugin = require('eslint-plugin-react-hooks');
const jsxA11yPlugin = require('eslint-plugin-jsx-a11y');
const importPlugin = require('eslint-plugin-import');
const globals = require('globals');
const js = require('@eslint/js');
const prettier = require('eslint-config-prettier');

const { FlatCompat } = require('@eslint/eslintrc');

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

module.exports = defineConfig([
  {
    files: ['**/*.{js,ts,jsx,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
        project: './tsconfig.eslint.json',
        tsconfigRootDir: __dirname,
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2024,
        ...globals.jest,
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      'jsx-a11y': jsxA11yPlugin,
      import: importPlugin,
    },
    rules: {
      // JS rules
      semi: ['error', 'always'],
      'prefer-const': 'error',
      curly: ['error', 'all'],
      'max-len': [
        'error',
        {
          ignoreTemplateLiterals: true,
          ignoreComments: true,
        },
      ],
      'no-redeclare': ['error', { builtinGlobals: true }],
      'no-console': 'warn',
      'operator-linebreak': 'off',
      'brace-style': ['error', '1tbs'],
      'arrow-body-style': 'off',
      'arrow-parens': 'off',
      'no-param-reassign': [
        'error',
        {
          props: true,
          ignorePropertyModificationsFor: ['state'],
        },
      ],
      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: '*', next: 'return' },
        { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
        {
          blankLine: 'any',
          prev: ['const', 'let', 'var'],
          next: ['const', 'let', 'var'],
        },
        { blankLine: 'always', prev: 'directive', next: '*' },
        { blankLine: 'always', prev: 'block-like', next: '*' },
      ],

      // React rules
      'react/prop-types': 'off',
      'react/require-default-props': 'off',
      'import/prefer-default-export': 'off',
      'standard/no-callback-literal': 'off',
      'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }],
      'react/destructuring-assignment': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/state-in-constructor': ['error', 'never'],
      'react-hooks/rules-of-hooks': 'error',
      'jsx-a11y/label-has-associated-control': [
        'error',
        {
          assert: 'either',
        },
      ],
      'jsx-a11y/label-has-for': [
        'error',
        {
          components: ['Label'],
          required: { some: ['id', 'nesting'] },
          allowChildren: true,
        },
      ],
      'react/jsx-uses-react': 'off',
      'react/react-in-jsx-scope': 'off',

      // TS rules
      '@typescript-eslint/no-unused-vars': ['error'],
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },

  // Простіший конфліктний clean-up від Prettier
  prettier,

  globalIgnores(['**/eslint.config.js', '**/.eslintrc.js', 'dist', 'src/vite-env.d.ts']),
]);
