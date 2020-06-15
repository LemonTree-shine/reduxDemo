import React, { Component } from "react";
import ReactDom from "react-dom";
import {Redux} from "../page/miniRedux/component/redux";

import {Router,browserHistory} from 'react-router';


import "../scss/common.scss";


import {default as routes} from './router';


ReactDom.render(  
    <Redux defaultValue={{name:"陈泽"}}>
        <Router history={browserHistory} routes={routes}></Router>
    </Redux>    ,
    document.getElementById("contain"),
    () => {
        //回调
    }
)
