var path = require("path");

var config = {
    entry: ["./src/index.tsx"],
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "bundle.js"
    },
    devServer: {
        contentBase: path.join(__dirname, "build"),
        port: 9000,
        historyApiFallback: true,
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"]
    },

    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader",
                exclude: /node_modules/
            }, {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
};

module.exports = config;