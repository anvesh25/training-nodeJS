const path = require('path');
module.exports = {
    entry: "./src/button.ts",
    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    module:
    {
        rules:
        [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    output: 
    {
        filename: 'bondle.js',
        path: path.resolve(__dirname, 'dist')
    }
};