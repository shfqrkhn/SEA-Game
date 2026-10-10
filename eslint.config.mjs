import tseslint from 'typescript-eslint';

const unsafeHtml = [
  { property: 'innerHTML', message: 'Use the DOM helper (textContent/createElement); see MPES C-11.' },
  { property: 'outerHTML', message: 'Use the DOM helper; see MPES C-11.' },
  { property: 'insertAdjacentHTML', message: 'Use the DOM helper; see MPES C-11.' },
  { property: 'write', object: 'document', message: 'document.write is forbidden.' },
];

export default tseslint.config(
  { ignores: ['_archive/**', '.artifacts/**', 'dist/**', 'node_modules/**', 'test-results/**', 'coverage/**'] },
  ...tseslint.configs.recommended,
  {
    rules: {
      'no-eval': 'error',
      'no-implied-eval': 'error',
      'no-new-func': 'error',
      'no-restricted-properties': ['error', ...unsafeHtml],
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    },
  },
  {
    // Tamper fixtures mutate untyped JSON on purpose.
    files: ['tests/**/*.ts'],
    rules: { '@typescript-eslint/no-explicit-any': 'off' },
  },
  {
    files: ['source/**/*.ts'],
    rules: {
      'no-restricted-globals': ['error',
        { name: 'fetch', message: 'No network (MPES C-02).' },
        { name: 'XMLHttpRequest', message: 'No network (MPES C-02).' },
        { name: 'WebSocket', message: 'No network (MPES C-02).' },
        { name: 'EventSource', message: 'No network (MPES C-02).' },
        { name: 'localStorage', message: 'Use the storage port (sessionStorage only, MPES §8).' },
        { name: 'indexedDB', message: 'Use the storage port (MPES §13.2).' },
        { name: 'alert', message: 'No native dialogs (MPES C-12).' },
        { name: 'confirm', message: 'No native dialogs (MPES C-12).' },
        { name: 'prompt', message: 'No native dialogs (MPES C-12).' },
      ],
    },
  },
  {
    files: ['source/domain/**/*.ts'],
    rules: {
      'no-restricted-globals': ['error',
        { name: 'document', message: 'Domain is pure (R-ARCH-1).' },
        { name: 'window', message: 'Domain is pure (R-ARCH-1).' },
        { name: 'Date', message: 'Time is an argument (R-ARCH-1).' },
        { name: 'crypto', message: 'Entropy is an argument (R-ARCH-1).' },
        { name: 'sessionStorage', message: 'Domain is pure (R-ARCH-1).' },
      ],
      'no-restricted-properties': ['error', ...unsafeHtml,
        { object: 'Math', property: 'random', message: 'Entropy is an argument (R-ARCH-1).' },
      ],
    },
  },
);
