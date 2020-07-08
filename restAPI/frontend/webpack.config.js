const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: './dist',
        hot: true
    }
};


// module.exports = {
//     entry: './src/index.js',
//     module: {
//         rules: [
//             {
//                 test: /\.(js|jsx)$/,
//                 exclude: /(node_modules|bower_components)/,
//                 use: ['babel-loader']
//             }
//         ]
//     },
//     resolve: {
//         extensions: ['*', '.js', ".jsx"]
//     },
//     output: {
//         path: __dirname + '/dist',
//         publicPath: '/',
//         filename: 'bundle.js'
//     },
//     devServer: {
//         contentBase: './dist'
//     }
// };


// const webpack = require('webpack');

// module.exports = {
//     entry: './src/index.js',
//     module: {
//         rules: [
//             {
//                 test: /\.(js|jsx)$/,
//                 exclude: /(node_modules|bower_components)/,
//                 use: 'babel-loader',
//                 options: {
//                     presets: ['react', 'es2015'],
//                     plugins: ['transform-class-properties']
//                 }
//             }
//         ]
//     },
//     resolve: {
//         extensions: ['*', '.js', '.jsx']
//     },
//     output: {
//         path: __dirname + '/dist',
//         publicPath: '/',
//         filename: 'bundle.js'
//     },
//     plugins: [
//         new webpack.HotModuleReplacementPlugin()
//     ],
//     devServer: {
//         contentBase: './dist',
//         hot: true
//     }
// };