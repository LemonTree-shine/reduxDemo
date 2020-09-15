import React from "react";
import "./index.scss";
import CScroll from "../../component/cscroll/index";

export default class Index extends React.Component {
    render() {
        return <div className="scroll_test_page">
            <CScroll
                contentHeight={1000}
                itemHeight={100}
                itemSize={20}
                renderItem={(item) => {
                    return <div className="list_item">
                        <div className="name">{item.name}</div>
                        <div className="content">{item.content}</div>
                        {/* {item.name} */}
                    </div>
                }}
                list = {this.state.list}
            />
        </div>
    }
    constructor(props) {
        super(props);
        this.state = {
            list:[]
        }
    }
    componentDidMount(){
        let list = [];
        for (let i = 0; i < 400; i++) {
            list.push({
                name:"西瓜"+i,
                content:"asdasdasdasdasdasd"
            })
        }
        this.setState({
            list
        })
    }
}