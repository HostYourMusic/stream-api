module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testPathIgnorePatterns: ["<rootDir>/build/"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "yaml", "yml", "node"],
  transform: {
    "\\.ya?ml$": "yaml-jest",
  },
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{js,jsx.,ts}"],
  coverageDirectory: "./reports",
  coveragePathIgnorePatterns: ["<rootDir>/node_modules/, <rootDir>/build/"],
  coverageReporters: ["json", "text", ["lcov", { projectRoot: "../../" }]],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
};
