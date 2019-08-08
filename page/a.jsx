import React, { Component } from "react";
import { connect } from "react-redux";
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';

@connect((state)=>{
    return state
})
export default class A extends Component{
    render(){
        return <div>
            <Link to={"/b"}>{this.props.reducer.name}</Link>
        </div>
    }
    constructor(props){
        super(props);
        console.log(props);
    }
    componentDidMount(){
        setTimeout(()=>{
            this.props.dispatch({
                type:"ADD",
                data:{
                    name:"我换了一个名字",
                    age:"27"
                }
            });
        },2000)
    }
}

