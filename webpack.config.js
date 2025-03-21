const path = require("path");



module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "main.js"
    },
    module: {
        rules: [
        {
            test: /\.txt$/,
            loader: "raw-loader" }
        ]
    }
}