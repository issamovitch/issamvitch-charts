const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const uglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports={
    mode: 'development',
    entry: {
        'chart': './src/index.js',
        'chart.min': './src/index.js',
    },
    output: {
        library: 'IssChart',
        libraryTarget: 'umd',
        libraryExport: 'default',
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
    module: { 
        rules:[
            {
                test: /\\.(js|jsx)$/,
                include: [
                  path.resolve(__dirname, 'src')
                ],
                loader: 'babel-loader',
              },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'style-loader', 'css-loader'],
            },
        ] 
    },
    plugins:[
        new uglifyJsPlugin({
            include: /\.min\.js$/,
          }),
        new webpack.ProgressPlugin(),
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'index.html'),
            excludeChunks: ["chart.min"],
            inject: 'head'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new CopyPlugin({
            patterns: [
              { from: 'src/style.css', to: 'src/style.css' },
            ],
          }),
    ]
}