const webpack = require("webpack");
module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
	rules: [
      {
        test: /\.(glsl|vs|fs)$/,
        loader: require.resolve("../index.js")
      }
	]
}
};


