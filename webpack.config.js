const path = require('path')

const webpack = require('webpack')

const HtmlWebPackPlugin = require("html-webpack-plugin");

const CleanWebpackPlugin = require('clean-webpack-plugin');

const myPlugin = require("./myPlugin")
module.exports = {
    // entry: './src/index.js',

    entry: {
        "main": './src/index.js',
        "vendor": ['react', 'react-dom']
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash:8].js',
    },


    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: path.resolve(__dirname, './myLoader.js'),
                        options: {
                            name: 'Alice'
                        }
                    },
                    'babel-loader'
                ],

            },
        ]

    },

    // resolveLoader: {
    //     modules: [
    //         'node_modules',
    //         path.resolve(__dirname)
    //     ]
    // },
    devtool: "#cheap-module-eval-source-map",

    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        host: "0.0.0.0",
        port: 9090,
        inline: true,
        hot: true
    },

    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    chunks: 'initial',
                    name: 'vendor',
                    test: 'vendor',
                    enforce: true
                },
            }
        },
        runtimeChunk: true
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new CleanWebpackPlugin(['dist']),
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        // new myPlugin()
    ],
}
