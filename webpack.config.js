const webpack = require('webpack');
const path = require('path');
/* 引用插件 */
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ROOT_DIR = path.resolve(__dirname, "");

const Crude = require('./plug');


console.log("当前目录 " + ROOT_DIR);
module.exports = {
    entry: {
        main: ROOT_DIR + '/main.js',
        http: ROOT_DIR + '/src/http.js',
        luyou: ROOT_DIR + '/src/router.js',
    },
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        //filename:'my-first-webpack.bundle.js'
        filename: '[name].[chunkhash:8].js'
    },
    devServer: {
        inline: true,
        hot: true
    },
    resolve: {
        alias: {
            vue: 'vue/dist/vue.js'
        }
    },
    plugins: [
        //  new webpack.NamedModulesPlugin(),
        // new webpack.HotModuleReplacementPlugin()

        // 生成默认页面 index.html
        new HtmlWebpackPlugin({ // 基于模板生成 template.html
            filename: 'index.html',
            template: 'src/assets/template.html',
            date: new Date()
        }),
        new Crude(),
    ],
    module: {
        rules: [{
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            }

        ]
    }
}