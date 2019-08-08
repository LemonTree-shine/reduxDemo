var defaultData = {

}

export function reducer(state = {}, action){
    
    //存数据到sessionStorage
    //sessionStorage.setItem("_reduxRootData",JSON.stringify({...state,...action.data}));
    switch (action.type) {
        case 'ADD':
            return {...state,...action.data};
        default: 
            return state;
    }
};

export function reducer2(state = {}, action){
    
    //存数据到sessionStorage
    //sessionStorage.setItem("_reduxRootData",JSON.stringify({...state,...action.data}));
    
    switch (action.type) {
        case 'USER':
            return {...state,...action.data};
        default: 
            return state;
    }
};