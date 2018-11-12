const { VueLoaderPlugin } = require('vue-loader');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');

module.exports = {
    entry: {
        main: './frontend/interfaces/mainPage/index.js'
    },
    output: {
        filename: "[name].js",
        path: __dirname + '/dist'
    },
    resolve: {
        extensions: [".js", ".vue"],
        alias: {
            "vue$": "vue/dist/vue.esm.js",
            "@component": __dirname + '/frontend/components',
            "@assets": __dirname + '/frontend/assets',
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.pug$/,
                loader: 'pug-plain-loader'
            },
            {
                test: /\.(css|styl(us)?)/,
                use: [
                    // Чтобы css был отдельным файлом. Вместо vue-style-loader
                    MiniCssExtractPlugin.loader,
                    'css-loader',

                    // Постпроцессинг стилей: оптимизация/минификация/автопрефиксы
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: "postcss",
                            plugins: [
                                require("autoprefixer")({
                                    browsers: [
                                        "last 3 versions",
                                        "last 4 iOS versions",
                                        'ie >= 10',
                                        'safari >= 6'
                                    ]
                                }),
                                require("cssnano")
                            ]
                        }
                    },

                    // Нужно для для правильных путей url(...) при импортах
                    {
                        loader: 'resolve-url-loader',
                        options: {
                            // Для созхранения query-параметров необходимых для svg-transform-loader
                            keepQuery: true,
                            root: __dirname + '/dist/img',
                        }
                    },
                    'stylus-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                use: [
                    {
                        // То же, что и file-loader, но при размере файла меньше limit встраивает картинку через data
                        loader: "url-loader",
                        options: {
                            name: 'img/[name].[ext]',
                            // // Маленькие картинки можно инлайнить
                            // limit: 512
                        }
                    }
                ]
            },
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({filename: 'css/[name].css'}),
        new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /ru/),
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                "vue-common": {
                    test: /node_modules\/(vue|vue-router|vuex|axios)/,
                    chunks: "initial",
                    name: "vue-common",
                    enforce: true
                },
                common: {
                    test: /node_modules\/(moment|lodash)/,
                    chunks: "initial",
                    name: "common",
                    enforce: true
                }
            }
        }
    },
    devtool: "source-map"
};
