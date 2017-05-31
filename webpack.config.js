const { join, resolve } = require('path');
const webpack = require('webpack');
const glob = require('glob');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

const extractCSS = new ExtractTextPlugin({
    filename: 'assets/css/[name].css',
    allChunks: true
});

const entries = {};
const chunks = [];
glob.sync('./src/pages/**/app.js').forEach(path => {
    const chunk = path.split('./src/pages/')[1].split('/app.js')[0];
    entries[chunk] = path;
    chunks.push(chunk);
});

const config = {
    entry: entries,
    output: {
        path: resolve(__dirname, './dist'),
        filename: 'assets/js/[name].js'
    },
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            assets: join(__dirname, '/src/assets'),
            components: join(__dirname, '/src/components'),
            root: join(__dirname, 'node_modules'),
            vue: 'vue/dist/vue.js'
        }
    },
    module: {
        rules: [{
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                loaders: {
                    css: ExtractTextPlugin.extract({
                        use: 'css-loader',
                        fallback: 'style-loader'
                    }),
                    postcss: ExtractTextPlugin.extract({
                        use: ['css-loader', 'postcss-loader'],
                        fallback: 'style-loader'
                    })
                }
            }
        }, {
            test: /\.js$/,
            use: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                use: ['css-loader', 'postcss-loader'],
                fallback: 'style-loader',
                publicPath: '../../'
            })
        }, {
            test: /\.html$/,
            use: [{
                loader: 'html-loader',
                options: {
                    root: resolve(__dirname, 'src'),
                    attrs: ['img:src', 'link:href']
                }
            }]
        }, {
            test: /\.(png|jpg|jpeg|gif)(\?.+)?$/,
            exclude: /favicon\.png$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 4000,
                    name: 'assets/img/[name].[ext]'
                }
            }]
        }, {
            test: /\.(woff2?|eot|ttf|otf)(\?.+)?$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 4000,
                    name: 'assets/fonts/[name].[ext]'
                }
            }]
        }]
    },
    plugins: [
        new CommonsChunkPlugin({
            name: 'vendors',
            filename: 'assets/js/vendors.js',
            chunks: chunks,
            minChunks: chunks.length
        }),
        extractCSS,
        new CopyWebpackPlugin([{
            from: resolve(__dirname, './src/common'),
            to: resolve(__dirname, './dist/common'),
            ignore: ['.*']
        }])
    ],
    devServer: {
        contentBase: join(__dirname, 'dist'),
        host: '127.0.0.1',
        port: 8010,
        open: true,
        historyApiFallback: false,
        noInfo: true
    },
    devtool: '#eval-source-map'
};

glob.sync('./src/pages/**/*.html').forEach(path => {
    const chunk = path.split('./src/pages/')[1].split('/app.html')[0];
    const filename = chunk + '.html';
    const htmlConf = {
        filename: filename,
        template: path,
        inject: 'body',
        hash: process.env.NODE_ENV === 'production',
        chunks: ['vendors', chunk]
    };
    config.plugins.push(new HtmlWebpackPlugin(htmlConf));
});

module.exports = config;

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map';
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        })

    ]);
}