import React, { Component } from "react";
import { connect } from "react-redux";
import { browserHistory } from 'react-router';
import axios from "axios";
import "./a.scss";
import info from "../util";

@connect((state) => {
    return state
})
export default class A extends Component {
    render() {
        return <div>
            <div onClick={this.toHomePage}>{this.props.reducer.name}111</div>
            <div>{this.state.name}</div>
            <div>{this.state.aaa}</div>
            <div>{this.state.age}</div>
        </div>
    }
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount() {
        debugger
        this.setState({
            name:"chenze"
        },()=>{
            console.log(this.state)
        });
        debugger
        this.setState({
            aaa:"1231231"
        },()=>{
            console.log(this.state)
        });
        this.setState({
            age:10
        },()=>{
            console.log(this.state)
        });

        // console.log(this.state);
        // return;

        console.log(axios);
        axios({
            method: 'post',
            url: '/api/readArticle',
            headers:{
                "Content-Type":"text/plain; charset=utf-8",
                "withCredentials":true
            },
            data:{id:"52"}
        });

        // setTimeout(() => {
        //     this.props.dispatch({
        //         type: "ADD",
        //         data: {
        //             name: "我换了一个名字",
        //             age: "27"
        //         }
        //     });
        // }, 2000)
    }
    toHomePage = ()=>{
        this.setState({
            name:"asdasdasdad"
        })
        //browserHistory.push("/root/home");
    }
    componentWillUnmount(){
        console.log("组件销毁了");
    }
    componentDidUpdate(){
        console.log(123)
    }
}

