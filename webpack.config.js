// 安装webpack webpack-cli -D
// 引入path模块
const path = require('path')
// webpack配置html文件
const HtmlWebpackPlugin = require('html-webpack-plugin');
// webpack配置vue-loader使用的插件VueLoaderPlugin
const VueLoaderPlugin = require('vue-loader/lib/plugin')
// 配置webpack进出口文件
module.exports = {
    entry: './src/main.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    //指定生成代码是开发模式还是生产模式 development production  production 未压缩速度较快
    mode: 'development',
    // 配置插件，指定压缩生成html的template模板文件 安装html-webpack-plugin
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html')
        }),
        // 请确保引入这个插件！
        new VueLoaderPlugin()
    ],
    module: {
        rules: [
            // 配置webpack识别css文件安装css-loader style-loader 
            {
                test: /\.css$/i,
                // 执行顺序是右向做左执行
                use: ['style-loader', 'css-loader'],
            },
            // 配置webpack识别less文件安装 less-loader less 两个文件
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader'], // compiles Less to CSS
            },
            // 配置webpack识别sass | scss 文件 安装sass-loader
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
            // 配置webpack识别图片 安装 yarn add url-loader file-loader -D
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 30 * 1024, //30kb大小限制，可以自己设置。超过限制，不在压缩到js文件中.注意：url-loader会将文件的大小放大30%。
                        },
                    },
                ],
            },
            // 配置webpack识别音频文件
            {
                test: /\.(mp3|mp4|avi|ogg)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 50 * 1024, //50kb大小限制，可以自己设置。超过限制，不在压缩到js文件中.注意：url-loader会将文件的大小放大30%。
                        },
                    },
                ],
            },
            // 配置字体图标文件
            {
                test: /\.(mp3|mp4|avi|ogg)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 50 * 1024, //50kb大小限制，可以自己设置。超过限制，不在压缩到js文件中.注意：url-loader会将文件的大小放大30%。
                        },
                    },
                ],
            },
            // 配置webpack将高版本js装换成为低版本的js 安装babel-loader @babel/core @babel/preset-env
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-object-rest-spread']
                    }
                }
            },
            // 配置vue-loader需要安装vue-loader  插件vue-template-compiler | vue-loader在vue的官网
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
        ],
    },
    //配置自动更新 安装 webpack-dev-server
    devServer: {
        // 指定端口8888
        port: 8888,
        // 自动打开浏览器 
        open: true,
        // 热更新，刷新局部内容，不更新整个页面
        hot: true,
    },
};