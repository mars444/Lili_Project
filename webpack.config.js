const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const miniCss = require('mini-css-extract-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'index.js',
    },
    resolve: {
        modules: [path.join(__dirname, 'src'), 'node_modules'],
        alias: {
            react: path.join(__dirname, 'node_modules', 'react'),
        },
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|svgz)(\?.+)?$/,
                exclude: /src\/assets\/icons/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: 'images/[name].[ext]',
                            limit: 1,
                        },
                    },
                ],
            },
            {
                test: /\.(eot|ttf|woff|woff2|otf)(\?.+)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: 'fonts/[name].[ext]',
                            limit: 1,
                        },
                    },
                ],
            },
            {
                test: /\.css/,
                use: [
                    miniCss.loader,
                    'css-loader',
                    'postcss-loader',
                ],
                sideEffects: true
            },
            {
                test: /\.s[ac]ss$/i,
                sideEffects: true,
                use: [
                    // Creates `style` nodes from JS strings
                    'style-loader',
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
            {
                test: /\.svg$/,
                exclude: [/src\/assets\/images/, /node_modules/],
                include: path.resolve(__dirname, 'src/assets/icons'), // /src\/icons/,
                loader: 'svg-sprite-loader',
                options: {
                    symbolId: (filePath) => 'icon-' + path.basename(filePath, '.svg'), //https://github.com/JetBrains/svg-sprite-loader#configuration
                },
            },
            // {
            //   test: /\.svg$/,
            //   exclude: /node_modules/,
            //   include: path.resolve(__dirname, 'src/assets/images'), // /src\/icons/,
            //   loader: 'url-loader',
            // },
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html',
        }),
        new MiniCssExtractPlugin(),
    ],
};