module.exports = {
    // Project name
    displayName: "@react-user/data-manager-ui",

    // Working directory
    roots: ["<rootDir>/src/app"],

    // Test coverage
    coverageDirectory: "<rootDir>/src/test/coverage",
    collectCoverageFrom: [
        "<rootDir>/src/app/**/*.{ts,tsx}", // All subdirectories under src/app
    ],

    // Test files
    testMatch: ["<rootDir>/src/app/**/*.test.{ts,tsx}"],

    // TypeScript
    preset: "ts-jest",

    // Test Environment
    testEnvironment: "jest-environment-jsdom-fourteen",
    moduleNameMapper: {
        "\\.svg": "<rootDir>/src/test/mocks/svgrMock.js", // Mock SVG imports
        "\\.(css|scss)$": "identity-obj-proxy", // Mock stylesheet imports

        react: "<rootDir>/node_modules/react",
        "react-dom": "<rootDir>/node_modules/react-dom",
        "@material-ui/core": "<rootDir>/node_modules/@material-ui/core",
        "@material-ui/icons": "<rootDir>/node_modules/@material-ui/icons",
    },
};
