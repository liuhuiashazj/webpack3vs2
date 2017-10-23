const webpack = require('webpack')

const webpackConfig = {
        name: 'client',
        target: 'electron-renderer',
        entry: {
                // bundle3: './index.js',
                bundle2: './index.js'
        },
        output: {
                filename: `[name].js`,
                path: __dirname + '/dist/',
                publicPath: '',
                libraryTarget: "var"
        }/* ,
        plugins: [
                new webpack.optimize.ModuleConcatenationPlugin()
        ] */

}

module.exports = webpackConfig
