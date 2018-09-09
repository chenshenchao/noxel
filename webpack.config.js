const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = [{
    entry: {
        main: path.resolve(__dirname, 'main', 'view', 'main.js')
    },
    output: {
        filename: 'scripts/[name].js',
        path: path.resolve(__dirname, 'asset')
    },
    devtool: 'source-map',
    performance: {
        hints: false
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                loaders: {
                    css: ExtractTextPlugin.extract({
                        use: 'css-loader'
                    })
                }
            }
        }, {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [
                    'css-loader',
                    'sass-loader'
                ]
            })
        }, {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [
                    'css-loader'
                ]
            })
        }]
    },
    plugins: [
        new ExtractTextPlugin('styles/[name].css'),
        new VueLoaderPlugin()
    ],
    watchOptions: {
        ignored: /node_modules/,
        aggregateTimeout: 300,
        poll: 1000
    }
}];