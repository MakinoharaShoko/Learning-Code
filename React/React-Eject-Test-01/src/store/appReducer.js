import {createStore} from "redux";

//初始化
const defaultStore = {
    inputValue:'Write something',
    list:[
        '搞114514',
        '坐下北泽JR'
    ]
};

const reducer =  (state = defaultStore,action)=>{
    //判断action的类型，改变state的指定属性
    if(action.type === 'value/changeInput'){
        let newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.payload;
        return newState;
    }
    return state;
}

const appStore = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default appStore;