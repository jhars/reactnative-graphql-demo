module.exports = {
  preset: 'react-native',
  "testMatch": [
    "<rootDir>/__tests__/**"
  ],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native|@aws-amplify|@aws-amplify/ui-react-native)',
  ],
};
