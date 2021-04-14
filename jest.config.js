module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverageFrom: [
    'src/*.ts'
  ],
  reporters: [
    'default',
    [
      'jest-junit',
      {
        outputName: 'output/coverage/junit/junit.xml',
      },
    ],
  ],
  coverageThreshold: {
    global: {
      statements: 50,
      branches: 90,
      functions: 0,
      lines: 0,
    },
  },
}; 
