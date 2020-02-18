import React, { Component } from "react";
import {Button} from "reactcomponentaaa";

export default class Index extends Component{
    render(){
    return <div onClick={()=>{
        this.setState({
            name:"aaaabbbb"
        });
    }}>{this.state.name}</div>
    }
    constructor(){
        super();
        this.state = {
            name:"chenze",
            age:10
        }
    }

    componentDidMount(){
        
        this.setState({
            name:"wujing"
        },()=>{
            console.log(1);
        });

        this.setState({
            age:20
        },()=>{
            console.log(2);
        });
        debugger
        
    }

    componentDidUpdate(){
        debugger
        console.log("我更新了")
    }
}