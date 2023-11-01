/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import { pathsToModuleNameMapper ,JestConfigWithTsJest } from 'ts-jest';
import { compilerOptions } from "./tsconfig.paths.json";

const jestConfig: JestConfigWithTsJest = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  clearMocks: true,
  roots: ['<rootDir>'],
  modulePaths: [compilerOptions.baseUrl],
  moduleDirectories: ["node_modules", "<rootDir>"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.(css|less|sass|scss|png|jpg|gif|ttf|woff|woff2|svg)$": "jest-transform-stub"
  },
  moduleNameMapper:{
    ...pathsToModuleNameMapper(compilerOptions.paths, {prefix: '<rootDir>/'}),
    '\\.(ttf|woff|eot|jpg|png|png)$': '<rootDir>/utils/tests/__ mocks __/fileMock.js',
  },
  testPathIgnorePatterns: [
    "\\\\node_modules\\\\",
    "\\\\.vscode\\\\",
  ]
};

export default jestConfig;