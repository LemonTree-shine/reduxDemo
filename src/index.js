import React, { Component } from "react";
import ReactDom from "react-dom";
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from "react-redux";

import {reducer} from "../redux/reduce";
import A from "../page/a";
import B from "../page/b";

var store = createStore(reducer);

ReactDom.render(
    <Provider store={store}>
        <Router>
            <Route exact path="/a" component = {A}/>
            <Route exact path="/b" component = {B}/>
        </Router>
    </Provider>
    
,
    document.getElementById("contain"),
    () => {
        //回调
    }
)
