module.exports = {
  preset: 'react-native',
  "testMatch": [
    "<rootDir>/__tests__/*.test.tsx",
    "<rootDir>/__tests__/src/views/**/*.test.tsx",
  ],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native|@aws-amplify|@aws-amplify/ui-react-native)',
  ],
};
