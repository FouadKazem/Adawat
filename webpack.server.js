const path = require('path')

module.exports = {
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        }, 
        port: 3000,
        open: true,
        hot: true,
        historyApiFallback: {
            index: 'main.html',
        },
        devMiddleware: {
            writeToDisk: true,
        },
    }
}