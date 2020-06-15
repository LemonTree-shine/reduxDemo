import React from "react";
import {connect} from "./component/redux";

@connect()
export default class Index extends React.Component{
    render(){
        return <div>{this.props.reduxData.name}</div>
    }
    componentDidMount(){
        console.log(this.props);
        setTimeout(()=>{
            this.props.reduxData.disPatch('',{
                name:111111
            },()=>{
                console.log(this.props);
            });
        },1000);
    }
}
