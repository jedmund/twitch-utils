const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')

// webpack CLI accepts exported functions as configs.
// 1. the `env` object contains any env-prefixed flags passed in by the user
//    For example, for --env.thing=wow, `env` will be { thing: 'wow' }
// 2. the `options` object contains all potential webpack CLI config options
//   set to default values. user-specified flags will override the defaults.

module.exports = (env = {}, options = {}) => {
    return {
        entry: './src/index',

        output: {
            path: path.join(__dirname, 'build'),
            filename: 'bundle.js'
        },

        plugins: [
            new webpack.NamedModulesPlugin(),
            new HtmlWebpackPlugin({
                template: path.join(__dirname, 'src', 'template.html'),
                inject: false
            }),
            // ExtractTextPlugin is not HMR-friendly
            !options.hot && new ExtractTextPlugin('bundle.css')
        ].filter(Boolean), // strip out the falsey stuff

        resolve: {
            alias: {
                containers: path.resolve('./src/containers'),
                components: path.resolve('./src/components'),
                data: path.resolve('./src/data')
            }
        },

        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                    options: {
                        babelrc: false,
                        presets: [
                            [
                                'env',
                                {
                                    targets: {
                                        browsers: ['last 2 versions']
                                    },
                                    modules: false
                                }
                            ],
                            'react'
                        ],
                        plugins: [
                            // this keeps you from having to manually bind class methods in the contructor
                            require.resolve(
                                'babel-plugin-transform-class-properties'
                            )
                        ]
                    }
                },

                // use ETP only in a non-hot environment
                options.hot
                    ? {
                          test: /\.sass$/,
                          use: ['style-loader', 'css-loader', 'sass-loader']
                      }
                    : {
                          test: /\.sass$/,
                          loader: ExtractTextPlugin.extract({
                              fallback: 'style-loader',
                              use: ['css-loader', 'sass-loader']
                          })
                      },
                {
                    test: /\.(png|jpe?g|gif)$/,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                limit: 8192
                            }
                        }
                    ]
                }
            ]
        }
    }
}
