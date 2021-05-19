const path = require("path");

const root = path.resolve(__dirname);

module.exports = {
    rootDir:root,
    displayName:"root-tests",
    testMatch:["<rootDir>/src/**/*.test.js"],
    testEnvironment:"node",
    clearMocks:true,
    preset:null,
};
