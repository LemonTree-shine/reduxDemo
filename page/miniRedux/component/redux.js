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

    mergeState = (Obj,callback)=>{
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

export function connect(dataKeyList){
    return function(Com){
        class Wrap extends Component{
            render(){
                return <ContextTheme.Consumer>
                    {context=>{
                        let propsData = context;
                        if(dataKeyList){
                            propsData = {};
                            [...dataKeyList,'disPatch'].forEach((key)=>{
                                for(let objKey in context){
                                    if(key===objKey){
                                        propsData[key]=context[key]
                                    }
                                }
                            });
                        }
                        return <Com reduxData={propsData}/>
                    }}
                </ContextTheme.Consumer>
            }
        }
        return Wrap;
    }
}

// export function connect(Com){
//     class AAA extends Component{
//         render(){
//             return <ContextTheme.Consumer>
//                 {context=>{
//                     return <Com reduxData={context}/>
//                 }}
//             </ContextTheme.Consumer>
//         }
//     }
//     return AAA;
// }

export function mergeData(){
    let mergeData = {};
    for(let i = 0;i<arguments.length;i++){
        //console.log(arguments[i]);
        mergeData = {
            ...mergeData,
            ...arguments[i]
        }
    }
    return mergeData;
}


