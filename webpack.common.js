/* eslint import/no-extraneous-dependencies: ["error", {devDependencies: true}] */
const webpack = require('webpack');

module.exports = {
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  output: {
    path: `${__dirname}`,
    publicPath: '/',
    filename: 'bundle.js',
  },
};