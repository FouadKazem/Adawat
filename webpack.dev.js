const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { devServer } = require('./webpack.server')

const name = ['main']
module.exports = []

for(let i = 0; i < name.length; i++) {
    module.exports.push({
        mode: 'development',
        entry: `./src/scripts/js/${name[i]}.js`,
        output: {
            filename: `${name[i]}.js`,
            path: path.resolve(__dirname, 'dist'),
        },
        module: {
            rules: [
                {
                    test: /\.scss$/i,
                    use: [
                        MiniCssExtractPlugin.loader,
                        'css-loader',
                        'sass-loader',
                    ],
                },
                {
                    test: /\.(svg|png|jpe?g|gif)$/i,
                    loader: 'file-loader',
                    options: {
                        outputPath: 'imgs',
                        name: '[name].[ext]'
                    },
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'src') + `/${name[i]}.html`,
                filename: `${name[i]}.html`,
                scriptLoading: 'blocking',
            }),
            new MiniCssExtractPlugin({
                filename: `${name[i]}.css`,
            }),
        ],
    })
    if (i === 0) {
        module.exports[i] = {
            ...module.exports[i],
            devServer,
        }
    }
}