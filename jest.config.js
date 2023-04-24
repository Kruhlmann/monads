// eslint-disable-next-line unicorn/prefer-module
module.exports = {
    collectCoverage: true,
    collectCoverageFrom: ["src/**/*.ts"],
    roots: ["<rootDir>"],
    transform: {
        "^.+\\.tsx?$": "ts-jest",
    },
    testRegex: "tests/.*(feature|test|spec).tsx?$",
    moduleFileExtensions: ["ts", "tsx", "js", "mjs", "json"],
    moduleNameMapper: {
        "^src/(.*)": "<rootDir>/src/$1",
    },
    moduleDirectories: ["node_modules"],
    testEnvironment: "node",
};
