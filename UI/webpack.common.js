const path = require('path');

module.exports = {
    entry:[
        './src/index.js',
        './src/sass/main.scss'
    ],
    output:{
        filename:'js/main.js',
        path: path.resolve(__dirname,'dist'),
        publicPath:'/'
    },
    module:{
        rules:[{
            test:/\.jsx?$/,
            loader:'babel-loader',
            exclude:[/node_modules/],
            query:{
                presets:['es2015','stage-0','react']
            }
        }]
    }
}