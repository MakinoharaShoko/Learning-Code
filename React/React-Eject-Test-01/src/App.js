import './App.css';
import store from "./store";
import {useState} from "react";
import {Button, Input} from 'antd';
import 'antd/dist/antd.css';
import {listAction} from "./store/reducer/list";
import {inputValueAction} from "./store/reducer/inputValue";

function App() {
    //初始化HOOK：取出store里的state
    const [appData,setAppData] = useState(store.getState());
    //当store变动时，调用回调函数（这里是setAppData）
    store.subscribe(()=>{setAppData(store.getState())});
    let list = appData.list;
    let page = [];
    for (let i = 0; i < list.length; i++) {
        let temp = <div>{list[i]}</div>
        page.push(temp);
    }

    const changeInputValue = (e)=>{
        // 创建action
        const action = inputValueAction.changeInput(e.target.value)
        // 使action生效（也就是传给reducer，判断后更新store中的state）
        store.dispatch(action);
    }

    const addElementToList = ()=>{
        const action = listAction.addListElement(appData.inputValue)
        store.dispatch(action);
    }

    return (
        <div>
            <Input placeholder={"Write Something"} onChange={changeInputValue}/>
            <Button onClick={addElementToList}>Add</Button>
            {page}
        </div>
    );
}

export default App;
