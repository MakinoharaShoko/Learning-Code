const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// 生成随机字符串，用于区分打包产物
const bundle_random_str = Math.random().toString(36).slice(-6);

module.exports = {
    // 入口
    entry: {
        index: './src/main.tsx'
    },
    // 出口
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: `assets/[name].${bundle_random_str}.bundle.js`,
    },
    // 对于各个模块的规则
    module: {
        rules: [
            // JavaScript
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            // css
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            // ts
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ]
    },
    plugins: [
        // 打包前清理
        new CleanWebpackPlugin(),
        // 打包时处理HTML
        new HtmlWebpackPlugin({
            title: 'Webpack Test',
            template: path.resolve(__dirname, './public/index.html'),
            filename: 'index.html',
        }),
        // 打包成css
        new MiniCssExtractPlugin({
            filename: `assets/style.${bundle_random_str}.css`
        }),
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    }
}
