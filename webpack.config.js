const webpack = require('webpack');
const path = require('path');
var ROOT_DIR = path.resolve(__dirname, "");


console.log("当前目录 " + ROOT_DIR);
module.exports = {
    entry: {
        main: ROOT_DIR + '/main.js',
        http: ROOT_DIR + '/src/http.js'
    },
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        //filename:'my-first-webpack.bundle.js'
        filename: '[name].js'
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
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
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