const path = require("path");

module.exports = {
    entry:{
        "app":path.resolve(__dirname,"app/index.js")
    },
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"[name].js",
        publicPath:"temp" //这里必须写 temp 其他都不行，只想内存
    },
    devServer:{
        contentBase:"./",
        host:"localhost",
        compress:true,
        port:8000,
        open:true
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                exclude:/node_modules/,
                loaders:"babel-loader",
                query:{
                    presets:["env","react"]
                }
            },
            {
                test:/\.css$/,
                loaders:"style-loader!css-loader"
            }
        ]
    }
}