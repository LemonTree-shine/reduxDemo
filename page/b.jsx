import React, { Component } from "react";
import { connect } from "react-redux";

@connect((state)=>{
    return state
})
export default class B extends Component{
    render(){
        return <div className="test">hello world</div>
    }
}