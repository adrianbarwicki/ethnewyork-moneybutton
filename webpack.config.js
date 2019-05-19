const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/index.ts',
    output: {
        filename: 'ethnewyork-moneybutton.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [{
                    loader: 'less-loader'
                }]
            }, {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }, {
                test: /\.ts$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'ts-loader',
                    options: {
                        transpileOnly: true
                    }
                }],
            }
        ],
    },
    externals: {
    },
    resolve: {
        extensions: [ '*', '.ts', '.js', '.css' ]
    },
    optimization: {
        minimizer: [new TerserPlugin({
            extractComments: {
            condition: 'all',
            banner: `Adrian Barwicki | adrian@adrianbarwicki.com`
        }})]
    },
};
