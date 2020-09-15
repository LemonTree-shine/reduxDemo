import React from "react";
import "./index.scss";

export default class Index extends React.Component{
    render(){
        let list = this.props.list || [];
        return <div className="c_scroll">
            <div className="scroll_content" 
                style={{
                    height: `${this.contentHeight/100}rem`
                }}
                onScroll={(e)=>{
                    this.handleScroll(e)
                }}
            >
                <div style={{
                    height:`${this.itemHeight/100*list.length}rem`,
                }}>
                    <div style={{
                        transform:`translateY(${this.state.start*this.itemHeight/100}rem)`
                    }}>
                        {list.slice(this.state.start,this.state.start+this.itemSize).map((item,index)=>{
                            return <div key={index} style={{
                                minHeight:`${this.itemHeight/100}rem`
                            }}>{this.props.renderItem(item)}</div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    }
    constructor(props){
        super(props);
        this.contentHeight = props.contentHeight;
        this.itemHeight = props.itemHeight;
        this.itemSize = props.itemSize;
        this.dpr = parseInt(window.devicePixelRatio);
        this.state = {
            start:0
        }
    }

    handleScroll = (e)=>{
        let { start } = this.state;
        //e.target.scrollTop是根据当前dpr的滚动高度，要转成iphone6标准的值（dpr为2）
        let currentStart = parseInt(e.target.scrollTop/this.dpr*2/this.itemHeight); 
        if(start!==currentStart){
            //console.log(currentStart)
            this.setState({
                start:currentStart
            });
        }
    }
}