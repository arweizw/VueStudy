const webpack = require("webpack");
module.exports = {
    // 入口
    entry: "./main.js",
    //出口
    output: {
        path: __dirname,
        filename: "build.js"
    },
    module: {
        loaders: [
            { test: /\.vue$/, loader: "vue-loader" },
            { test: /\.js$/, loader: "babel-loader", exclude: /node_modules/ }
        ]
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
                babel: {
                    presets: ["es2015"],
                    plugins: ["transform-runtime"]
                }
            }
        })
    ]
};