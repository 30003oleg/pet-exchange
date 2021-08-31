module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:import/errors',
    'plugin:import/react',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:import/warnings',
    'plugin:react/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'react-app',
    'standard',
  ],
  ignorePatterns: [
    'build', //
    'public',
    'src/serviceWorker.ts',
    '.eslintrc.js',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      legacyDecorators: true,
    },
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  plugins: ['@typescript-eslint', 'import', 'simple-import-sort'],
  rules: {
    'react-hooks/exhaustive-deps': 'error',
    '@typescript-eslint/no-var-requires': 'off',
    camelcase: [
      'error',
      {
        allow: ['^DEPRECATED_', '^FIXME_', '^UNSAFE_', '^CFA_'],
        ignoreDestructuring: true,
      },
    ],
    'class-methods-use-this': 'off',
    'comma-dangle': 'off',
    complexity: ['error', 16],
    'consistent-return': 'error',
    'consistent-this': ['error', 'that'],
    'default-case': 'error',
    'eol-last': ['error', 'always'],
    eqeqeq: [
      'error',
      'always',
      {
        null: 'ignore',
      },
    ],
    'func-name-matching': ['error', 'always'],
    'func-names': ['error', 'as-needed'],
    'func-style': [
      'error',
      'declaration',
      {
        allowArrowFunctions: true,
      },
    ],
    'global-require': 'error',
    'guard-for-in': 'error',
    'handle-callback-err': 'error',
    'id-blacklist': ['error', 'cb', 'err'],
    'id-length': [
      'error',
      {
        max: 48,
        min: 1,
      },
    ],
    'import/dynamic-import-chunkname': 'error',
    'import/export': 'error',
    'import/namespace': 'error',
    'import/newline-after-import': 'error',
    'import/no-absolute-path': 'error',
    'import/no-amd': 'error',
    'import/no-commonjs': 'error',
    'import/no-cycle': 'error',
    'import/no-default-export': 'error',
    'import/no-deprecated': 'warn',
    'import/no-duplicates': 'error',
    'import/no-dynamic-require': 'error',
    'import/no-extraneous-dependencies': 'error',
    'import/no-internal-modules': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-named-as-default': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-named-default': 'error',
    'import/no-namespace': 'error',
    'import/no-nodejs-modules': 'error',
    'import/no-self-import': 'error',
    'import/no-unassigned-import': 'error',
    'import/no-unresolved': [
      'error',
      {
        commonjs: true,
      },
    ],
    'import/no-unused-modules': 'error',
    'import/no-useless-path-segments': [
      'error',
      {
        noUselessIndex: true,
      },
    ],
    'import/no-webpack-loader-syntax': 'error',
    'import/order': 'off',
    indent: 'off',
    'linebreak-style': ['error', 'unix'],
    'lines-around-comment': [
      'error',
      {
        ignorePattern: 'webpack',
      },
    ],
    'lines-between-class-members': [
      'error',
      'always',
      {
        exceptAfterSingleLine: true,
      },
    ],
    'max-classes-per-file': ['error', 1],
    'max-depth': ['error', 8],
    'max-lines': [
      'error',
      {
        max: 512,
        skipBlankLines: true,
        skipComments: true,
      },
    ],
    'max-lines-per-function': [
      'error',
      {
        max: 128,
        skipBlankLines: true,
        skipComments: true,
      },
    ],
    'max-nested-callbacks': ['error', 4],
    'max-statements': ['error', 32],
    'max-statements-per-line': [
      'error',
      {
        max: 1,
      },
    ],
    'multiline-ternary': 'off',
    'new-cap': 'error',
    'new-parens': 'error',
    'no-alert': 'error',
    'no-array-constructor': 'error',
    'no-async-promise-executor': 'error',
    'no-await-in-loop': 'error',
    'no-bitwise': 'error',
    'no-buffer-constructor': 'error',
    'no-caller': 'error',
    'no-continue': 'error',
    'no-console': 'error',
    'no-div-regex': 'error',
    'no-extra-semi': 'off',
    'no-use-before-define': 'off',
    'no-unused-vars': 'off',
    'no-restricted-imports': [
      'error',
      {
        paths: ['cypress'],
        patterns: ['ct-*'],
      },
    ],
    'react/button-has-type': [
      'error',
      {
        reset: false,
      },
    ],
    'react/destructuring-assignment': [
      'off',
      'always',
      {
        ignoreClassFields: true,
      },
    ],
    'react/display-name': 'off',
    'react/forbid-dom-props': 'off',
    'react/jsx-boolean-value': ['error', 'never'],
    'react/jsx-curly-brace-presence': ['error', 'never'],
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.tsx'],
      },
    ],
    'react/jsx-fragments': ['error', 'syntax'],
    'react/jsx-key': 'error',
    'react/jsx-max-depth': [
      'error',
      {
        max: 4,
      },
    ],
    'react/jsx-no-bind': [
      'error',
      {
        ignoreDOMComponents: true,
      },
    ],
    'react/jsx-no-comment-textnodes': 'error',
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-no-target-blank': 'error',
    'react/jsx-pascal-case': 'error',
    'react/jsx-sort-default-props': [
      'off',
      {
        ignoreCase: true,
      },
    ],
    'react/jsx-sort-props': [
      'off',
      {
        ignoreCase: true,
      },
    ],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/no-access-state-in-setstate': 'error',
    'react/no-array-index-key': 'error',
    'react/no-children-prop': 'error',
    'react/no-danger-with-children': 'error',
    'react/no-danger': 'error',
    'react/no-deprecated': 'error',
    'react/no-did-mount-set-state': 'error',
    'react/no-did-update-set-state': ['error', 'disallow-in-func'],
    'react/no-direct-mutation-state': 'error',
    'react/no-find-dom-node': 'error',
    'react/no-is-mounted': 'error',
    'react/no-multi-comp': 'error',
    'react/no-redundant-should-component-update': 'error',
    'react/no-render-return-value': 'error',
    'react/no-set-state': 'off',
    'react/no-string-refs': [
      'error',
      {
        noTemplateLiterals: true,
      },
    ],
    'react/no-this-in-sfc': 'error',
    'react/no-unescaped-entities': 'error',
    'react/no-unknown-property': 'error',
    'react/no-unsafe': 'error',
    'react/no-unused-state': 'error',
    'react/no-will-update-set-state': ['error', 'disallow-in-func'],
    'react/prefer-stateless-function': [
      'error',
      {
        ignorePureComponents: true,
      },
    ],
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-render-return': 'error',
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true,
      },
    ],
    'react/sort-comp': 'off',
    'react/static-property-placement': ['error', 'static public field'],
    'react/style-prop-object': 'error',
    'react/void-dom-elements-no-children': 'error',
    semi: 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'sort-imports': 'off',
    'sort-keys': [
      'off',
      'asc',
      {
        caseSensitive: false,
        natural: false,
      },
    ],
    'sort-vars': [
      'off',
      {
        ignoreCase: true,
      },
    ],
    'space-before-function-paren': 'off',
  },
};