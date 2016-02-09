module.exports = {

    entry: "./src/pollicino.js",
    output: {
        path: "./dist",
        filename: "pollicino.js",
        library: 'pollicino'
    },

    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            {
              test: /\.js$/,
              loader: 'babel-loader',
              exclude: /node_modules/,
              query: {
                  plugins : ["transform-regenerator"],
                  presets: ['es2015']
              }
            }
        ]
    }
};