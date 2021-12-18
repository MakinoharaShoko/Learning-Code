import './App.css';
import appStore from "./store/appReducer";
import {useState} from "react";
import { Input } from 'antd';
import 'antd/dist/antd.css';

function App() {
    //初始化HOOK：取出store里的state
    const [appData,setAppData] = useState(appStore.getState());
    //当store变动时，调用回调函数（这里是setAppData）
    appStore.subscribe(()=>{setAppData(appStore.getState())});
    let list = appData.list;
    let inputValue = appData.inputValue;
    let page = [];
    console.log(appStore.getState())
    for (let i = 0; i < list.length; i++) {
        let temp = <div>{list[i]}</div>
        page.push(temp);
    }

    const changeInputValue = (e)=>{
        // 创建action
        const action = {
            type:'value/changeInput',
            payload:e.target.value
        }
        // 使action生效（也就是传给reducer，判断后更新store中的state）
        appStore.dispatch(action);
    }

    return (
        <div>
            <Input placeholder={"Write Something"} onChange={changeInputValue}/>
            {page}
            <div>
                {inputValue}
            </div>
        </div>
    );
}

export default App;
