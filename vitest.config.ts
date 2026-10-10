import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['tests/unit/**/*.test.ts'],
    exclude: ['_archive/**', '.artifacts/**', 'node_modules/**'],
    environment: 'node',
    coverage: {
      provider: 'v8',
      include: ['source/domain/**/*.ts'],
      reportsDirectory: '.artifacts/coverage',
      thresholds: { lines: 95 },
    },
  },
});
