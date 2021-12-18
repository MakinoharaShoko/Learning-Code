//初始化
const defaultStore ='Write something';

const inputValue =  (state = defaultStore, action)=>{
    //判断action的类型，改变state的指定属性
    if(action.type === 'value/changeInput'){
        let newState = JSON.parse(JSON.stringify(state));
        newState = action.payload;
        return newState;
    }
    return state;
}

export default inputValue;