var defaultData = {
    name:"陈泽"
}

export function reducer(state = defaultData, action){
    
    //存数据到sessionStorage
    //sessionStorage.setItem("_reduxRootData",JSON.stringify({...state,...action.data}));
    
    switch (action.type) {
        case 'ADD':
            return {...state,...action.data};
        default: 
            return state;
    }
};