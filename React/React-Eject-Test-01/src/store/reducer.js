const defaultStore = {
    inputValue:'Write something',
    list:[
        '搞114514',
        '坐下北泽JR'
    ]
};

export default (state = defaultStore,action)=>{
    console.log(state);
    console.log(action);
    if(action.type === 'value/changeInput'){
        let newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.payload;
        return newState;
    }
    return state;
}