const { defineConfig } = require('@vue/cli-service');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production' 
  ? '/List-of-products/' 
  : '/',
  css: {
    extract: {
      filename: 'style.css',
      chunkFilename: 'style.css',
    },
  },
  configureWebpack: {
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'style.css',
        chunkFilename: 'style.css',
      }),
    ],
  },
});

