/** @type {import('jest').Config} */
const config = {
  resolver: 'ts-jest-resolver',
  testEnvironment: 'node',
  extensionsToTreatAsEsm: ['.ts'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.cjs'],
  globalSetup: './jest.global-setup.cjs',
  moduleFileExtensions: ['js', 'cjs', 'ts', 'json'],
  moduleNameMapper: {
    '^@/(.+)': '<rootDir>/src/$1',
    // '^(\\.{1,2}/.*)\\.js$': '$1',
  },
  transform: {
    '^.+\\.(t|j)sx?$': [
      'esbuild-jest',
      {
        sourceMaps: true,
        format: 'esm',
        target: 'es2022',
      },
      // 'ts-jest',
      // {
      //   useESM: true,
      // },
    ],
  },
  transformIgnorePatterns: ['/node_modules/'],
  verbose: true,
};

module.exports = config;
