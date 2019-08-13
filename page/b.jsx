import React, { Component } from "react";
import { connect } from "react-redux";
import C from "./c";
import A from "./a";


@connect((state) => {
    return state
})
export default class B extends Component{
    render(){
        return <div className="test">
            hello world1111122222
            <A/>
        </div>
    }
    constructor(props){
        super(props);
        console.log(props)
    }
}
