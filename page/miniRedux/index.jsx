import React from "react";
import {connect} from "./component/redux";
import "./index.scss";

@connect(['personInfo'])
export default class Index extends React.Component{
    render(){
        return <div>
            {this.props.reduxData.personInfo.name}
            <button onClick={this.handleClick}>点击我换内容</button>
        </div>
    }
    componentDidMount(){
        console.log(this.props.reduxData)
    }
    handleClick = ()=>{
        let {personInfo} = this.props.reduxData;
        personInfo.name = "小西瓜";
        this.props.reduxData.disPatch({
            personInfo
        },()=>{
            console.log(this.props);
        });
    }
}



