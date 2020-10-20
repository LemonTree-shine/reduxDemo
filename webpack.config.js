var webpack = require("webpack");
var path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const LessFunc = require('less-plugin-functions');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
function HelloWorldPlugin(options) {
    // 使用 options 设置插件实例……
  }
  
  HelloWorldPlugin.prototype.apply = function(compiler) {
    compiler.plugin('emit', function(compilation,callback) {
        console.log(compiler.options);
        // compilation.chunks.forEach((chunk)=>{
        //     console.log(chunk.files)
        // })
        //console.log(compilation.chunks);
      callback();
    });
  };

//默认是开发环境
let isDev = true;

//判断是否是开发环境
if(process.env.NODE_ENV){
    isDev = process.env.NODE_ENV === "development"
}

let PublicPath = "/";

let SourceMap = {}

if(isDev){
    PublicPath = "/";
    SourceMap = {
        // devtool: 'source-map'
    }
}else{
    PublicPath = "/";
}

module.exports = {
    ...SourceMap,
    devServer:{ //开发服务器配置
        port:3000,
        progress:true,
        contentBase:"./dist"

    },
    mode:isDev?"development":"production", 
    entry:{
        bundle:"./src/index.js",
    },   //入口文件
    output:{
        filename:"[name].[hash].js",  //打包输出文件
        publicPath:PublicPath,
        path:path.resolve(__dirname,"dist"),  //必须是一个绝对路径
        chunkFilename:'[name].[chunkhash:5].chunk.js'
    },
    // externals: {
    //     'react': 'React',
    //     'react-dom': 'ReactDOM',
    // },
    //loader配置
    module:{
        rules:[{
            test:/\.css$/,
            use:[
                {
                    loader: MiniCssExtractPlugin.loader,
                },
                {loader:"css-loader"},
                {loader:"postcss-loader"},
                
            ]
        },{
            test:/\.less$/,
            use:[
                {
                    loader: MiniCssExtractPlugin.loader,
                },
                {loader:"css-loader"},
                {
                    loader:"less-loader",
                },
                {loader:"postcss-loader"},
            ]
        },{
            test:/\.scss$/,
            use:[
                {
                    loader: MiniCssExtractPlugin.loader,
                },
                {loader:"css-loader"},
                {loader:"postcss-loader"},
                {loader:"sass-loader",},
                
            ],
        },{
            test:/(\.[jt]sx?)$/,
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
        },{
            test: /\.(eot|woff|svg|ttf)$/,
            use:{
                loader: 'file-loader'
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
            template:"./src/template/index.hbs",
            filename:"index.html",
            //hash:true,
            // minify:{    //模板优化控制
            //     removeAttributeQuotes:true,
            //     collapseWhitespace:true
            // }
        }),
        // new HelloWorldPlugin({options: true}),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns:path.resolve(__dirname,'dist/**/*'),
            cleanAfterEveryBuildPatterns:path.resolve(__dirname,'dist/**/*'),
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css',
        })
    ],
    optimization: {
        //打包 第三方库
        //打包 公共文件
        // minimizer:[
        //     new UglifyJsPlugin({
        //         cache: true,//缓冲
        //         parallel: true, //并发打包,一次打包多个
        //         sourceMap:true,//源码调试
        //     })
        // ],
        splitChunks: {
            cacheGroups: {
                common:{//node_modules内的依赖库
                    chunks:"all",
                    name:"common",
                    minChunks: 2, //被不同entry引用次数(import),1次的话没必要提取
                    maxInitialRequests: 5,
                    minSize: 0,
                    priority:100,
                    // enforce: true?
                },
            }
        }
    }
}

