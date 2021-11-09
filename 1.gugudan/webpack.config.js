const path = require('path')
const { webpack } = require('webpack')
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool:'eval', // hidden-source-map
    resolve: {
        extensions: ['.jsx', '.js']
    },

    entry: {
        app: './client',   
    },
    module: {
        rules: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            options: {
                presets: [['@babel/preset-env', {
                    targets: {
                        browsers: ['> 1% in KR'], // browserslist
                    },
                }], '@babel/preset-react', 
            ],
                plugins: [
                    '@babel/plugin-proposal-class=properties',
                    'react-refresh/babel'
                ],
            }
        }],
    },
    plugins: [
        new RefreshWebpackPlugin(),
        new webpack.LoaderOptionsPlugin({ debug: true}),
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename:'app.js',
        publicPath: '/dist',
    },
    devServer: {
        devMiddelware: {publicPath: '/dist'},
        statc: { directory : path.resolve(__dirname) },
        hot : true,
    },
}