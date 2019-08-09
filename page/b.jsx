import React, { Component } from "react";
import { connect } from "react-redux";
import C from "./c";

@connect((state)=>{
    return state
})
export default class B extends Component{
    render(){
        return <div className="test">
            hello world
            <C/>
        </div>
    }
}