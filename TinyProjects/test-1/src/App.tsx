import './App.css'
import {useState} from "react";
import {Header} from "./Components/Header/Header";
import {Equipments} from "./Components/Equipments/Equipments";

function App() {
    const [simMobile, setSimMobile] = useState(false);
    return (
        <>
            {/*模拟手机端视图，用于在电脑端也可以预览效果*/}
            <div>
                <button className={'button_set_sim'}
                        onClick={() => setSimMobile(state => !state)}>{simMobile ? '关闭模拟' : '模拟手机端视图'}</button>
            </div>
            {/*主界面*/}
            <main style={{
                width: simMobile ? '375px' : '100vw',
                height: simMobile ? '812px' : '95vh',
                border: simMobile ? '1px solid rgba(0,0,0,0.5)' : 'none',
                display:'flex',
                flexFlow:"column"
            }}>
                {/*顶栏*/}
                <Header/>
                {/*装备显示界面*/}
                <Equipments/>
            </main>
        </>
    )
}

export default App
