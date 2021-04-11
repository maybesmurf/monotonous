const path = require("path");

module.exports = {
  roots: ["<rootDir>/src"],
  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)",
  ],
  transform: {
    "^.+\\.(ts|tsx)$": "esbuild-jest",
  },
  testEnvironment: path.join(__dirname, "tests/db_test_env.js"),
};
