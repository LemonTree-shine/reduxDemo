import React from "react";
import "./webComDemo";
import "./index.scss";

export default class Index extends React.Component{
    render(){
        return <div>
            <my-button
                name={this.state.name}
            >
                <div className="custom">{this.state.name}</div>
            </my-button>
        </div>
    }

    constructor(){
        super();

        this.state = {
            name:"陈泽"
        }
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                name:"改了一个名字"
            })
        },1000);
    }
}