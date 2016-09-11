var path = require('path');

module.exports = {
    entry: './dev/gc.js',
    output: {
        path: './build',
        filename: 'gc-min.js',
        chunkFilename: 'gc.js'
    },
    module: {
        loaders: [{
            test: /\.(es6|js|jsx)$/,
            exculde: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'stage-0'],
                plugins: ['add-module-exports']
            }
        }]
    }
}
