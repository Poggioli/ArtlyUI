// eslint-disable-next-line no-undef
module.exports = {
    roots: ['<rootDir>/src'],
    moduleNameMapper: {},
    setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
    testEnvironment: 'jest-environment-jsdom',
    clearMocks: true,
    collectCoverage: true,
    silent: true,
    collectCoverageFrom: [
      './src/**',
      '!./src/**/styles.ts(x)',
      '!./src/**/*stories.tsx',
      '!./src/**/types.ts(x)',
    ],
    coverageThreshold: {
      global: {
        lines: 90
      }
    }
  };
  