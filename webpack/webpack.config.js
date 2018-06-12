module.exports={
    entry:'./src/promise.js',
    output:{
        path:__dirname,
        filename:'./dist/index.js',
    },
    module:{
        rules:[
            {
                test:/\.js?$/,
                exclude:/(node_modules)/,//除去第三方依赖
                loader:'babel-loader'
            }
        ]
    }

}