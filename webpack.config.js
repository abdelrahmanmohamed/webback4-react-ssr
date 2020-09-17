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
    entry: {
        htmlClient: './src/js/components/FormHtml/client.js',
        bootstrapClient: './src/js/components/FormBootstrap/bClient.js',
        materialClient: './src/js/components/FormMaterial/mClient.js',
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
