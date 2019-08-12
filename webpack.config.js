var webpack = require("webpack");
var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const LessFunc = require('less-plugin-functions');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

//默认是开发环境
let isDev = true;

//判断是否是开发环境
if(process.env.NODE_ENV){
    isDev = process.env.NODE_ENV === "development"
}

let PublicPath = "/";
if(isDev){
    PublicPath = "/";
}else{
    PublicPath = "发布到线上地址";
}

module.exports = {
    devServer:{ //开发服务器配置
        port:3000,
        progress:true,
        contentBase:"./dist"

    },
    mode:isDev?"development":"production", 
    entry:"./src/index.js",   //入口文件
    output:{
        filename:"bundle.[hash].js",  //打包输出文件
        publicPath:PublicPath,
        path:path.resolve(__dirname,"dist"),  //必须是一个绝对路径
        chunkFilename:'[name].chunk.js'
    },
    //loader配置
    module:{
        rules:[{
            test:/\.css$/,
            use:[
                {
                    loader: MiniCssExtractPlugin.loader,
                    options:{
                        publicPath: './',
                        hmr:true
                    }
                },
                {loader:"style-loader"},
                {loader:"css-loader"},
                {loader:"postcss-loader"},
                
            ]
        },{
            test:/\.less$/,
            use:[
                {loader:"style-loader"},
                {loader:"css-loader"},
                {
                    loader:"less-loader",
                },
                {loader:"postcss-loader"},
            ]
        },{
            test:/\.scss$/,
            use:[
                isDev?
                    {loader:"style-loader"}
                    :
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options:{
                            publicPath: './',
                        }
                    },
                {loader:"css-loader"},
                {loader:"sass-loader",},
                {loader:"postcss-loader"},
            ]
        },{
            test:/(\.js|\.jsx)$/,
            use: {
				loader:'babel-loader',
				options: {
					presets: ['@babel/preset-env','@babel/preset-react'],
					plugins: [
                        [
                            'import', 
                            {"libraryName": "antd", "libraryDirectory": "es", "style": "css"},
                           
                        ],
					]
				}
			},
            exclude:/node_modules/
        },
        { 
            test: /\.tsx?$/, 
            loader: "awesome-typescript-loader", 
            options: {
                plugins: [
                    ['import', [{ libraryName: 'antd', style: true }]],
                ]
            }
        },{ 
            test: /\.js$/, 
            enforce: "pre",
            loader: "source-map-loader"
        },{
            test:/\.(png|jpe?g|gif|svg)$/,
            use:{
                loader:'url-loader',
                options:{
                    limit:8192,
                    name:'images/[name].[ext]',
                    publicPath:PublicPath
                },

            }
        }]
    },
    resolve:{
        //别名处理
        alias:{
            "@root":path.resolve(__dirname),
            "@page":path.resolve(__dirname,'page'),  //必须时绝对路径
        },
        //扩展名处理
        extensions: ['.js','.jsx','.ts','.tsx'],
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./src/index.html",
            filename:"index.html",
            //hash:true,
            // minify:{    //模板优化控制
            //     removeAttributeQuotes:true,
            //     collapseWhitespace:true
            // }
        }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns:path.resolve(__dirname,'dist/**/*'),
            cleanAfterEveryBuildPatterns:path.resolve(__dirname,'dist/**/*'),
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
            chunkFilename: 'css/[id].css',
        })
    ],
}

