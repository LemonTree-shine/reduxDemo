import React, { useState,useEffect } from 'react';

export default function HookDemo(props){
    var defaultState = {name:"asd"};
    var [info,setInfo] = useState(defaultState);

    function addCount(){
        setInfo({
            ...info,
            name:"chenze"
        });
    }

    return <div>
        {info.name}
        <button onClick={addCount}>点我添加数字</button>
    </div>
}