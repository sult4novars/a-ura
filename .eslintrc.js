module.exports = {
  plugins: ['prettier'],
  extends: [
    'next',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    'prettier/prettier': 'error',
    'import/no-unresolved': 'error', // https://github.com/import-js/eslint-plugin-import/blob/c3d14cb920bdc6d277134973d37364db22c3a8b8/docs/rules/no-unresolved.md
    'import/prefer-default-export': 'off', // https://github.com/import-js/eslint-plugin-import/blob/c3d14cb920bdc6d277134973d37364db22c3a8b8/docs/rules/prefer-default-export.md
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'sibling', 'parent', 'index'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'builtin', // Указываем реакт, как встроенный модуль, чтобы он показывался самым первым
          },
        ],
        pathGroupsExcludedImportTypes: ['internal', 'react'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        'newlines-between': 'always', // Отступы между всеми группами
        warnOnUnassignedImports: true,
      },
    ], // https://github.com/import-js/eslint-plugin-import/blob/c3d14cb920bdc6d277134973d37364db22c3a8b8/docs/rules/order.md
    'import/no-useless-path-segments': 'error', // https://github.com/import-js/eslint-plugin-import/blob/c3d14cb920bdc6d277134973d37364db22c3a8b8/docs/rules/no-useless-path-segments.md
    'import/dynamic-import-chunkname': ['error', { importFunctions: ['dynamicImport'] }], // https://github.com/import-js/eslint-plugin-import/blob/v2.26.0/docs/rules/dynamic-import-chunkname.md
    // "no-duplicate-imports": "off",
    // "import/no-duplicates": ["error"], // https://github.com/import-js/eslint-plugin-import/blob/c3d14cb920bdc6d277134973d37364db22c3a8b8/docs/rules/no-duplicates.md
    'no-useless-constructor': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error', // https://typescript-eslint.io/rules/no-unused-vars
    // #endregion no-unused-vars
    '@typescript-eslint/no-var-requires': 'off',
  },
}
