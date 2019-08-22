var webpack = require("webpack");
var webpackConfig = require("./webpack.config");
var express = require("express");
var path = require("path");
var ejs = require("ejs");
var fs = require("fs");
var hbs = require('hbs');
var serverInfo = require("./serverConfig");


var app = express();
app.set('view engine','html');
app.engine('html',hbs.__express);
app.set('views',path.join(__dirname,'dist'));


app.use(express.static(path.join(__dirname,'dist')));

app.get('*', function (req, res){
    //response.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    var data = JSON.stringify({
        name:"chenze"
    });
    res.render("index",{
        title:"asdadas",
        info:data
    });
});

//默认配置webpack开发环境
webpackConfig.mode = "development";
let compiler = webpack(webpackConfig);


app.listen(serverInfo.environment.port,function(){
    console.log(`server run at ${serverInfo.environment.port}`);
    console.log(serverInfo);
    return;
    compiler.watch({},function(err, stats){
        console.log(stats.toString({
            colors:true
        }));
    });
});


