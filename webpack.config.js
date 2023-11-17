const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',  
    output: {
        filename: '[name][contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        assetModuleFilename: '[name] [ext]',
        clean: true,
    },
    performance: {
        hints: false,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpeg|jpg|svg)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.ttf$/i,
                type: 'asset/resource',
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin ({
            title: 'Проект №1',
            filename: 'index.html',
            template: 'src/index.html',
        })
    ]
}