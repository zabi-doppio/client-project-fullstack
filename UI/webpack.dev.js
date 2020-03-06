const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = merge(common,{
    mode:'development',
    devtool:'inline-source-map',
    devServer:{
        contentBase:'./dist',
        hot:true,
        historyApiFallback: true,
    },
    module:{
        rules:[{
                test: /\.(scss)$/,
        use: [{
        loader: 'style-loader', // inject CSS to page
        }, {
        loader: 'css-loader', // translates CSS into CommonJS modules
        }, {
        loader: 'postcss-loader', // Run post css actions
        options: {
        plugins: function () { // post css plugins, can be exported to postcss.config.js
          return [
            require('precss'),
            require('autoprefixer')
          ];
        }
        }
        }, {
      loader: 'sass-loader' // compiles Sass to CSS
        }]
        }]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'dist', 'index.html'),
        filename: './index.html'
        })   

    ]
});