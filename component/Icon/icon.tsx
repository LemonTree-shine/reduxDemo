import React from "react";
import { type } from "../../serverConfig";
import "./icon.scss";
import asd from "./test";

// declare global{
//     interface Window {
//         ttt:string
//     }
// }

// interface ThisProps {
//     CLASSNAME?:string;
//     iconName?:string;
//     children?:any
// }

// type ThisProps = {
//     CLASSNAME?:string;
//     iconName?:string;
//     children?:any;
//     [propsName:string]:any
// }

// interface ThisState {
//     name?:string;
//     age?:number
// }

export default class Icon extends React.Component<ThisProps,ThisState>{
    render(){
        return <div>
            <div className={`icon-hsyt ${this.props.CLASSNAME || ""}`}>{this.props.iconName}</div>
            {this.props.children}
            {window.ttt}
            {this.state.name}
            {this.state.age}
        </div>
    }
    name:string;
    constructor(props:ThisProps){
        super(props);
        this.name = "asdasd";
        this.state = {
            name:"123123123",
        }

        console.log(this.identity("11111"));
    }

    identity<T>(arg:T):T{
        return arg
    }

    componentDidMount(){
        let a:number;
        a = 123;
        const b:string = "chenze";
        const c:boolean = false;
        const list:number[] = [1,2];

        const list2:Array<number> = [];
        const Obj:ThisProps = {
            CLASSNAME:"123123"
        }

        enum Color {
            '早上',
            '中午',
            '晚上'
        }

        interface Point {
            x:number;
            y:number;
        }

        interface Adress extends Point {
            adress?:string
        }

        let aa:Adress = {
            x:10,
            y:10,
            // adress:"asdasd"
        };

            

        this.run();

        console.log(this.getName<string>(["asdasd"]))
    }

    run():void{
        console.log(123);
    }

    getName<T>(name:T[]){
        console.log(name.length)
        return name
    }
}
