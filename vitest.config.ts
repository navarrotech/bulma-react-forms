// Copyright © 2024 Navarrotech

import config from './vite.config'
import { defineConfig } from 'vitest/config'

// For more information regarding this configuration:
// https://vitest.dev/config/

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  ...config,
  test: {
    // Reporting:
    reporters: [
      'verbose',
      'junit',
      'github-actions',
      'json',
    ],
    outputFile: {
      'junit': './test/test-results.xml',
      'html': './test/test-results.html',
      'json': './test/test-results.json',
      'github-actions': './test/test-results-gh.json',
    },
    passWithNoTests: true,

    // Coverage (V8)
    coverage: {
      reporter: [
        'text-summary',
      ],
      reportsDirectory: './test/coverage',
      provider: 'v8',
    },

    // Typescript
    typecheck: {
      enabled: true,
    },

    // React.js:
    globals: true,
    environment: 'happy-dom',

    // Circle CI:
    minWorkers: 2,
    maxWorkers: 3,
    logHeapUsage: true,

    // Exclude Electron units:
    exclude: [
      'node_modules/**',
    ],

    // Debugging:
    onStackTrace(error, { file, }): boolean | void {
      // If we've encountered a ReferenceError, show the whole stack.
      if (error.name === 'ReferenceError') {
        return false
      }

      // Reject all frames from third party libraries.
      if (file.includes('node_modules')) {
        return false
      }

      return true
    },
  },
})
