const path = require('path');
const MiniCssPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    
    entry: './src/index.js',
    output: {
        filename: 'prod.bundle.js',
        path: path.resolve(__dirname,'dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['babel-loader']
            },
            {
                test: /\.(css|sass|scss)$/,
                use: [MiniCssPlugin.loader,'css-loader','sass-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
                loader: 'file-loader',
                options:{
                    name: '[name].[ext]',
                    publicPath: '../imgs',
                    outputPath: '/imgs'
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                loader: 'file-loader',
                options:{
                    name: '[name].[ext]',
                    publicPath: '../fonts',
                    outputPath: '/fonts'
                }
            }
        ]
    },
    plugins:[
        new CleanWebpackPlugin(),
        new MiniCssPlugin({
            filename: 'css/style.css'
        })
    ]

}