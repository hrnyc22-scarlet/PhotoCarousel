var webpack = require('webpack');
var path = require('path');



var BUILD_DIR = path.resolve(__dirname, 'client/dist');
var APP_DIR = path.resolve(__dirname, 'client/src');




module.exports = {
    entry: APP_DIR + '/index.jsx',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }
      ]
    },
    output: {
      path: BUILD_DIR,
      filename: 'bundle.js'
    }
};


// var config = {
//   entry: APP_DIR + '/index.jsx',
//   module: {
//     loaders: [
//       {
//         test: /\.jsx?/,
//         include: APP_DIR,
//         loader: 'babel',
//         query: {
//           presets: ['es2015', 'react']
//         }
//       }
//     ]
//   },
//   output: {
//     path: BUILD_DIR,
//     filename: 'bundle.js'
//   }
// };