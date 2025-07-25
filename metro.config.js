const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  resolver: {
    extraNodeModules: {
      path: require.resolve('path-browserify'),
      os: require.resolve('os-browserify'),
    },
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
