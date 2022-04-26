import './App.css'
import {useState} from "react";
import {Header} from "./Components/Header/Header";
import {Equipments} from "./Components/Equipments/Equipments";

function App() {
    const [simMobile, setSimMobile] = useState(false);
    return (
        <>
            <div>
                <button className={'button_set_sim'}
                        onClick={() => setSimMobile(state => !state)}>{simMobile ? '关闭模拟' : '模拟手机端视图'}</button>
            </div>
            <main style={{
                width: simMobile ? '375px' : '100vw',
                height: simMobile ? '812px' : '95vh',
                border: simMobile ? '1px solid rgba(0,0,0,0.5)' : 'none',
                display:'flex',
                flexFlow:"column"
            }}>
                <Header/>
                <Equipments/>
            </main>
        </>
    )
}

export default App
