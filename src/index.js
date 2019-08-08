import React, { Component } from "react";
import ReactDom from "react-dom";
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from "react-redux";

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';

import {reducer} from "../redux/reduce";
import A from "../page/a";
import B from "../page/b";

const persistConfig = {
    key: 'userInfo',
    storage,
    blacklist:[]
  }
   
const persistedReducer = persistReducer(persistConfig, reducer)

//var store = createStore(reducer);

let store = createStore(persistedReducer)
let persistor = persistStore(store)

ReactDom.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Router>
                <Route exact path="/a" component = {A}/>
                <Route exact path="/b" component = {B}/>
            </Router>
        </PersistGate>
    </Provider>
    
,
    document.getElementById("contain"),
    () => {
        //回调
    }
)
