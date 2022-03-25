const path = require('path')

module.exports = {
    entry: './src/index.js',
    devtool: 'inline-source-map',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    // module:{
    //     test: /\.(png|svg|jpg|jpeg|gif)$/i,
    //     type: 'asset/resource',
    // } 
}

