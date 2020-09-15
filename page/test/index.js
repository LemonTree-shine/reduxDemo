import React from "react";

export default class Index extends React.Component{
    render(){
        return <div onClick={()=>{
            debugger
            this.setState({
                a:"asd"
            });
            this.setState({
                b:"ppp"
            })
        }}>
            {this.state.name}
            {/* <A/> */}
        </div>
    }
    constructor(props,content,{}){
        super();
        this.state = {
            name:"1"
        }
    }

    componentDidMount(){
        this.forceUpdate()
        return
        debugger
        this.setState({
            name:"西瓜"
        },()=>{
            debugger
            console.log("你好")
        });
        this.setState({
            name:"西瓜2"
        },()=>{
            debugger
            console.log("你好2")
        });
        this.setState({
            name:"西瓜3"
        },()=>{
            debugger
            console.log("你好3")
        });
    }
    componentWillReceiveProps(){
        debugger
    }
    componentWillUpdate(){
        console.log(1)
        debugger
    }
    componentDidUpdate(){
        debugger
        console.log(123);
    }
}

class A extends React.Component{
    render(){
        return <div>{this.state.name}</div>
    }
    constructor(){
        super();
        this.state = {
            name:"222"
        }
    }
    componentDidMount(){
        debugger
        this.setState({
            name:"hahaha"
        },()=>{
            console.log(33333333333);
        })
    }

    componentWillUpdate(){
        console.log(111111)
        debugger
    }

    componentDidUpdate(){
        debugger
        console.log(2222222222);
    }
}