import React, { Component } from "react";
import { connect } from "react-redux";
import { browserHistory } from 'react-router';

@connect((state) => {
    return state
})
export default class A extends Component {
    render() {
        return <div>
            <div onClick={this.toHomePage}>{this.props.reducer.name}</div>
        </div>
    }
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        console.log(browserHistory);
        setTimeout(() => {
            this.props.dispatch({
                type: "ADD",
                data: {
                    name: "我换了一个名字",
                    age: "27"
                }
            });
        }, 2000)
    }
    toHomePage = ()=>{
        browserHistory.push("/root/home");
    }
}

