import React, { Component } from "react";
import "./b.scss";
import {Pick,PickItem} from "timi-ui";
import Scroll from "./component/scroll/scroll";



export default class B extends Component{
    render(){
        return <div id="scroll-dom" className="testPage">
            <div id="content-dom">
                <div>来来来，我这里来点东西</div>
                <div>来来来，我这里来点东西</div>

                <div>来来来，我这里来点东西</div><div>来来来，我这里来点东西</div>
                <div>来来来，我这里来点东西</div>
                <div>来来来，我这里来点东西</div>
                <div>来来来，我这里来点东西</div>
                <div>来来来，我这里来点东西</div>
                <div>来来来，我这里来点东西</div>
                <div>
                    <Scroll 
                        loadMore = {this.loadMore}
                        bottomText = {this.state.bottomText}
                        hasMorePage = {this.state.hasMorePage}
                        scrollDomId = 'scroll-dom'    //滚动外层的dom
                        contentDomId = 'content-dom'
                    >
                        {this.state.list.map((content,index)=>{
                            return <div key={index}>{'这是我的child + '+content}</div>
                        })}
                    </Scroll>
                </div>
            </div>
        </div>
    }
    constructor(props){
        super(props);
        this.state = {
            list:[1,2,3,4,45,3,3,3,3,3,3,3,4,4,4,3,4,3,4,5,6,4,34,4,4,5,5,56,6,5,,4,5,,6,6,6,6],
            hasMorePage:true,
            bottomText:"正在加载中..."
        }
    }
    componentDidMount(){
        //console.log(Pick);
        //console.log(PickItem);
        // var pick = new Pick();
        // pick.show("选择证件类型",null,<PickItem 
        //     list={[
        //         {
        //             label:'身份证',
        //             value:'10'
        //         },
        //         {
        //             label:'军官证',
        //             value:'11'
        //         },
        //         {
        //             label:'护照',
        //             value:'20'
        //         },
        //         {
        //             label:'港澳居民来往内地通行证',
        //             value:'32'
        //         },
        //         {
        //             label:'台湾居民来往大陆通行证',
        //             value:'42'
        //         }
        //     ]} 
        //     label="label"
        //     handleClick = {(item)=>{}}
        //     currentItem = {{
        //         label:'台湾居民来往大陆通行证',
        //         value:'42'
        //     }}
        // />);
        
    }

    loadMore = ()=>{
        let { list } = this.state;
        setTimeout(()=>{
            this.setState({
                list:[...list,...list],
                hasMorePage:false,
                bottomText:"没有更多数据了"
            });
        },1000);
    }
}

