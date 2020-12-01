const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    home: './static/js/home/index.js',
    events: './static/js/events/index.js',
    meals: './static/js/meals/index.js',
    todo: './static/js/todo/index.js',
    landing: './static/js/landing/index.js',
    signup: './static/js/signup/index.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
 optimization: {
  minimize: true,
   splitChunks: {
     chunks: 'all',
   },
 },
};