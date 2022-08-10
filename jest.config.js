const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    // Handle module aliases (this will be automatically configured for you soon)
    "^@/components(.*)$": "<rootDir>/components/$1",
    "^@/data": "<rootDir>/data/$1",
    "^@/lib(.*)$": "<rootDir>/lib/$1",
    "^@/hooks": "<rootDir>/hooks/index.ts",
    "^@/themes": "<rootDir>/themes/index.ts",
    "^@/utils(.*)$": "<rootDir>/utils/$1",
    "^@/test-utils": "<rootDir>/test-utils/index.ts",
    "^@/interfaces": "<rootDir>/interfaces/index.ts",
    "^@/pages(.*)$": "<rootDir>/pages/$1",
  },
  testEnvironment: "jest-environment-jsdom",
  // Esperamos cobertura de todos los archivos js, jsx, ts y tsx.
  // Excluimos la cobertura de los mocks de MSW (opcional) y de los índices.
  collectCoverageFrom: [
    "**/*.{ts,tsx}",
    "!themes",
    "!node_modules",
    "!.next",
    "!**/index.ts",
    "!**/styles.ts",
  ],
  // Imponemos un mínimo del 70% de cobertura en las diferentes categorías de prueba.
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70,
    },
    "./components/ui/Header/": {
      functions: 66,
    },
  },
  // Esperamos recibir el resultado como texto en el terminal.
  coverageReporters: ["text"],
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
