import React, { Component } from "react";
import ReactDom from "react-dom";
// import {
//     BrowserRouter as Router,
//     Route,
//     Switch,
//     Link
//   } from 'react-router-dom';

import {Router,browserHistory} from 'react-router';


import { createStore,combineReducers } from 'redux';
import { Provider } from "react-redux";


import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';

import {reducer,reducer2} from "../redux/reduce";
import "../scss/common.scss";


import {default as routes} from './router';

const persistConfig = {
    key: 'userInfo',
    storage,
    blacklist:[]
  }

let combineReduce = combineReducers({
    reducer,
    reducer2
});
   
const persistedReducer = persistReducer(persistConfig, combineReduce)

let store = createStore(persistedReducer)
let persistor = persistStore(store);


ReactDom.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            {/* <Router>
                <Route exact path="/a" component = {A}/>
                <Route exact path="/b" component = {B}/>
            </Router> */}
            
            <Router history={browserHistory} routes={routes}></Router>
        </PersistGate>
    </Provider>,
    document.getElementById("contain"),
    () => {
        //回调
    }
)
