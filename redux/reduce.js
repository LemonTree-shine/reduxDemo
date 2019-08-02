var defaultData = {
    name:"陈泽"
}

export function reducer(state = JSON.parse(sessionStorage.getItem("_reduxRootData"))||defaultData, action){
    sessionStorage.setItem("_reduxRootData",JSON.stringify({...state,...action.data}));
    switch (action.type) {
        case 'ADD':
            return {...state,...action.data};
        default: 
            return state;
    }
};