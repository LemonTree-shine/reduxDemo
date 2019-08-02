import csshook from 'css-modules-require-hook/preset';

var express = require("express");
var path = require("path");
var ejs = require("ejs");
var fs = require("fs");
import {renderToString,renderToStaticMarkup} from "react-dom/server";
import React,{Component} from "react";


var app = express();


// app.get("/index",function(req,res){

//     var modelContent = fs.readFileSync("dist/index.html");
//     var __html = renderToStaticMarkup(<A/>);

//     var content = modelContent.toString().replace(`<div id="contain"></div>`,`<div id="contain">${__html}</div>`);

//     res.send(content)
// });

app.use(express.static(path.join(__dirname,'dist')));

app.get('*', function (request, response){
    response.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
})


app.listen("9999",function(){
    console.log("run at 9999")
});


