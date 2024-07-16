const webpack = require('webpack');

module.exports = function override(config, env) {
  config.resolve.fallback = {
    ...config.resolve.fallback,
    "vm": require.resolve("vm-browserify")
  };
  return config;
};
