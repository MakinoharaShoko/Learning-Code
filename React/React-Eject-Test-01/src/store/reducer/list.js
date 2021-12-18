const defaultStore = [
        'do 114514',
        'take xiabeize JR'
    ];

const list = (state=defaultStore, action)=>{
    if (action.type==='list/addList'){
        let newState = JSON.parse(JSON.stringify(state));
        newState.push(action.payload);
        return newState;
    }
    return state;
}

export default list;