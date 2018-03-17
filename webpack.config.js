const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist/src')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['babel-preset-env']
                    }
                }
            }, {
                test: /\.scss$/,
                use: ["style-loader" // creates style nodes from JS strings
                    , {
                        loader: "css-loader" // translates CSS into CommonJS
                    },
                    'postcss-loader' // use postcss-loader to add css style prefix
                    , "sass-loader" // compiles Sass to CSS
                ]
            }
        ]
    }
}
