/**
 * 
 */
const path =require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const PurifyCssWebpack = require('purifycss-webpack');
const glob = require('glob');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        // publicPath:'/diat/',
        filename: 'script/bundle.js'
    },
    resolve: {
        alias: {
            page: path.resolve(__dirname, 'src/page'),
            component: path.resolve(__dirname, 'src/component')
        }
    },
    module: {
        rules: [
            {
                test: /\.js$|\.jsx$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env','react']
                    }
                }
            },
            // {
            //     test: /\.css$/,
            //     use: ["style-loader", "css-loader"]
            // },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ["css-loader"],
                    publicPath:'../'
                })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader","sass-loader"],
                    publicPath:'../'
                })
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 50,
                        outputPath: 'images'
                        // name: 'images/[name].[ext]'
                    }  
                }]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        name: 'resource/[name].[ext]'
                    } 
                    // loader: 'file-loader',
                    // options: {
                    //     name: 'resource/[name].[ext]'
                    // } 
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash:true,
            template:'./src/index.html'
        }),
        new CleanWebpackPlugin('[dist]'),
        new ExtractTextPlugin("style/index.css"),
        // new PurifyCssWebpack({
        //     paths:glob.sync(path.join(__dirname, 'src/*.html'))//配置扫描的路径，将没有用的css删除
        // })
    ],
    devServer: {
        port: 3000
    }
    // optimization: {
    //     splitChunks: {
    //         cacheGroups: {
    //             commons: {
    //                 name: "commons",
    //                 chunks: "initial",
    //                 minChunks: 2
    //             }
    //         }
    //     }
    // },
}