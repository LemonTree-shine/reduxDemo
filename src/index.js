import React, { Component } from "react";
import ReactDom from "react-dom";
import {Redux,mergeData} from "../page/miniRedux/component/redux";
import {Router,browserHistory} from 'react-router';
import "../scss/common.scss";
import {default as routes} from './router';

import personInfo from "../page/reduxData/person";
import hosInfo from "../page/reduxData/hosInfo";

let data = mergeData({
    hosInfo:hosInfo
},{
    personInfo:personInfo
});


ReactDom.render(  
    <Redux defaultValue={data}>
        <Router history={browserHistory} routes={routes}></Router>
    </Redux>    ,
    document.getElementById("contain"),
    () => {
        //回调
    }
)
