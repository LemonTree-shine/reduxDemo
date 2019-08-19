var webpack = require("webpack");
var webpackConfig = require("./webpack.config");
var express = require("express");
var path = require("path");
var ejs = require("ejs");
var fs = require("fs");
var serverInfo = require("./serverConfig");


var app = express();


app.use(express.static(path.join(__dirname,'dist')));

app.get('*', function (request, response){
    response.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
});

//默认配置webpack开发环境
webpackConfig.mode = "development";
let compiler = webpack(webpackConfig);


app.listen(serverInfo.environment.port,function(){
    console.log(`server run at ${serverInfo.environment.port}`);
    console.log(serverInfo);
    compiler.watch({},function(err, stats){
        console.log(stats.toString({
            colors:true
        }));
    });
});


