import * as React from "react";
import {Name,default as bbb} from "./test"; 
import {Button} from 'antd';

export interface IProps{

}
export interface IState{
    nameaa:string
}

export default class C extends React.Component<IProps,IState>{
    render(){
        var {nameaa} = this.state;
        return <div>
            我是一个c页面
        </div>
    }
    constructor(props){
        super(props);
        this.state = {
            nameaa:"chenze"
        }
    }
    componentDidMount(){
        var change:string = "asdasasd";
        setTimeout(()=>{
            this.setState({
                nameaa:change
            });
        },1000)
    }
}