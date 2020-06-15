import React, { Component } from "react";
import ReactDom from "react-dom";

//初始化全局上下文
var ContextTheme = React.createContext();


export class Redux extends Component{
    render(){
        return <ContextTheme.Provider value={this.state.value}>
            {this.props.children}
        </ContextTheme.Provider>
    }
    constructor(props){
        super(props);
        this.state = {
            value:{
                ...props.defaultValue,
                disPatch:this.mergeState
            }
        }
    }

    mergeState = (active,Obj,callback)=>{
        var {value} =  this.state;
        this.setState({
            value:{
                ...value,
                ...Obj
            }
        },()=>{
            callback&&callback();
        });
    }
}

export function connect(){
    return function(Com){
        class AAA extends Component{
            render(){
                return <ContextTheme.Consumer>
                    {context=>{
                        return <Com reduxData={context}/>
                    }}
                </ContextTheme.Consumer>
            }
        }
        return AAA;
    }
}

