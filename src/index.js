import React, { Component } from "react";
import ReactDom from "react-dom";
// import {Redux,mergeData} from "../page/miniRedux/component/redux";
import {Router,browserHistory} from 'react-router';
import "../scss/common.scss";
import {default as routes} from './router';

// import personInfo from "../page/reduxData/person";
// import hosInfo from "../page/reduxData/hosInfo";

// let data = mergeData({
//     hosInfo:hosInfo
// },{
//     personInfo:personInfo
// });

class A extends Component{
    render(){
        return <div onClick={()=>{
            ReactDom.render(  
                <div>11111</div>,
                document.getElementById("contain"),
                () => {
                    //回调
                }
            )
        }}>
            123123123
            {this.props.children}
        </div>
    }
    componentDidMount(){

    }
}


ReactDom.render(  
    //<A><div>hahahahahahah</div></A>,
    <Router history={browserHistory} routes={routes}></Router>,
    // <Redux defaultValue={data}>
    //     <Router history={browserHistory} routes={routes}></Router>
    // </Redux>    ,
    document.getElementById("contain"),
    () => {
        //回调
    }
)
