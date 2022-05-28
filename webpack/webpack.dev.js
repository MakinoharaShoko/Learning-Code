const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require("path");

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    // 启用devServer
    devServer: {
        static: {
            publicPath: path.join(__dirname, 'public')
        },
        hot: true,
        compress: true,
        port: 3000,
    },
});
