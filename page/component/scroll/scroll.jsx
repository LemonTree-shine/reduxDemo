import React from "react";
import './scroll.scss';

export default class Index extends React.Component{
    render(){
        return <div className="scroll-load" ref={(el)=>{this.scrollContentDom = el}}>
            {this.props.children}
            <div className="bottom-dom">{this.props.bottomText}</div>
        </div>
    }
    componentDidMount(){

        console.log(document.querySelector('#' + this.props.scrollDomId))

        var self = this;

        let scrollDom = document.body;

        //判断是否有指定的滚动dom
        if(this.props.scrollDomId){
            scrollDom = document.querySelector('#' + this.props.scrollDomId);
        }

        scrollDom.onscroll = function(e){
            //console.log(document.documentElement.scrollTop);
            var ch = document.documentElement.clientHeight;
            var scrollTop = document.documentElement.scrollTop;
            var contentH = document.body.clientHeight;

            if(self.props.scrollDomId){
                ch = scrollDom.clientHeight;
                scrollTop = scrollDom.scrollTop;
                contentH = self.scrollContentDom.clientHeight;
            }

            if(self.props.contentDomId){
                contentH = document.querySelector('#' + self.props.contentDomId).clientHeight;
            }

            if(contentH==ch+scrollTop&&self.props.hasMorePage){
                self.props.loadMore && self.props.loadMore();
            }
        }
    }
}