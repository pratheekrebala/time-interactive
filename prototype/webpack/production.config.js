const path = require('path');
const webpack = require('webpack'); //to access built-in plugins

const config = {
  entry: '../debug.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'script-min.js'
  },
  module: {
    loaders: [
    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      query: {
        presets: [ [ 'es2015', { modules: false, loose: true  } ] ]

      }
    },
    {
        test: /\.json$/,
        loader: 'json-loader'
    },
    { 
        test: /\.less$/,
        loader: "style-loader!css-loader!autoprefixer-loader!less-loader"
    },
    {
        test: /\.scss$/,
        loader: "style-loader!css-loader!autoprefixer-loader!scss-loader"
    },
    { 
        test: /\.html$/,
        loader: "underscore-template-loader" 
    },
    {
        test: /\.(csv|tsv)$/,
        loader: "dsv-loader"
    }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      output: {
        comments: false,
      },
      sourceMap: false,
    })
 ]
};

module.exports = config;