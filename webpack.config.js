const path = require("path");
const nodeExternals = require("webpack-node-externals");

const commonConfig = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
};
const clientConfig = {
    ...commonConfig,
    entry: './src/js/components/client.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'client.js',
        publicPath: '/',
    },
};

const serverConfig = {
    ...commonConfig,
    entry: './src/js/server.js',
    target: 'node',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'server.js',
        publicPath: '/',
    },
    externals: nodeExternals(),
};

module.exports = [clientConfig, serverConfig];
