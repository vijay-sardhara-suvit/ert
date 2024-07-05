/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: {
    bundle: [path.join(process.cwd(), 'source/client')]
  },
  output: {
    path: path.resolve(process.cwd(), 'public/client'),
    filename: '[name].js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [path.join(process.cwd(), 'node_modules')],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        exclude: [path.resolve(process.cwd(), 'node_modules')],
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  },
  devServer: {
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(process.cwd(), 'source/client/index.html')
    }),
    new MiniCssExtractPlugin()
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          chunks: 'initial',
          name: 'vendor.bundle'
        }
      }
    }
  },
  resolve: {
    alias: {
      client: path.join(process.cwd(), 'source/client')
    }
  }
};
