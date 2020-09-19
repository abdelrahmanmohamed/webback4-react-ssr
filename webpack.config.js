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
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
};
const clientConfig = {
    ...commonConfig,
    entry: {
        registerMaterialClient: './src/js/components/register/views/material/client.js',
        registerBootstrapClient: './src/js/components/register/views/bootstrap/client.js',
        registerHtmlClient: './src/js/components/register/views/html/client.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].js",
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
