import React, { Component } from "react";
import "./b.scss";

export default class B extends Component{
    render(){
        return <div className="test">
            测试主题颜色
        </div>
    }
    constructor(props){
        super(props);
        this.state = {
            test:[1,2,3,4]
        }
    }
    componentDidMount(){
        
    }
}


class RRoute extends Component{
    render(){
        return <div>
            {this.props.children}
        </div>
    }
}

class RouteChild extends Component{
    render(){
        var {path,component,render} = this.props;
        var Com = component;
        if(window.location.pathname!==path){
            return null
        }
        return <div>
            {render()|| "没有组件"}
        </div>
    }
}

class Test extends Component{
    render(){
        return <div>测试组件</div>
    }
}
