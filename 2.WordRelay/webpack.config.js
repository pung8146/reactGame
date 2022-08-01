const path = require('path');
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
    name: 'wordrelay-setting',
    mode: 'development',// 실서비스 production
    devtool: 'eval',
    resolve: {
        extensions: ['.js','.jsx']
    },

    entry: {
        app: ['./client.jsx']
    }, // 입력
    
    module: {
        rules: [{
            test: /\.jsx?/,
            loader : 'babel-loader',
            options: {
                presets: [
                    ['@babel/preset-env', {
                    targets: {
                        browsers: ['last 2 chrome versions'],
                    },
                }],
                 '@babel/preset-react'
                ],
                plugins: [
                    '@babel/plugin-proposal-class-properties',
                    'react-refresh/babel',
                ],
            },
        }],
    },
    
    plugins: [
        new RefreshWebpackPlugin()
    ],

    output : {
        path: path.join(__dirname, 'dist'), // dist 는 현재폴더에서 만들어줍니다.
        filename: 'app.js',
        publicPath: '/dist/',
    },
    devServer: {
        devMiddleware: { publicPath: '/dist' },
        static: { directory: path.resolve(__dirname) },
        hot: true
      }
      
    // 출력
}