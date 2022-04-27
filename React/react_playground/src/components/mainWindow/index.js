// import styles from './mainWindow.module.scss'
import { useState, useEffect } from 'react'
import { Slider } from 'antd';
import 'antd/dist/antd.css';

const MainWindow = () => {
    useEffect(() => {
        document.getElementById('rInput').value = model;
        document.getElementById('dInput').value = model * 2;
    })

    const [model, setModel] = useState(100);
    const change = (value) => {
        setModel(value);
    }
    return <div style={{ fontSize: 'large' }}>
        <div style={{ padding: '10px 50px 10px 50px' }}>
            <Slider
                min={0}
                max={500}
                onChange={change}
                value={typeof model === 'number' ? model : 0}
            />
        </div>
        <div style={{display:'flex',justifyContent:'center',width:'100%'}}>
            <div style={{justifySelf:'start'}}>
                半径：<input id='rInput' onChange={(e) => setModel(parseInt(e.target.value))} />，
            </div>
            <div style={{justifySelf:'right'}}>
                直径：<input id='dInput' onChange={(e) => setModel(parseInt(e.target.value) / 2)} />
            </div>
            <div style={{justifySelf:'right'}}>
                面积：{model*model*3.14}
            </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', padding: '50px 0 0 0' }}>
            <div style={
                {
                    borderRadius: '100000px',
                    width: `${model * 2}px`,
                    height: `${model * 2}px`,
                    border: '1px solid rgba(0,0,0,1)'
                }
            } />
        </div>
        <div style={{
            position: 'fixed',
            bottom: '0',
            diaplay: 'flex',
            justifyContent: 'center',
            width: '100%'
        }}>
            周长：{model * 2 * 3.14}，
            面积：{model ** 2 * 3.14}，
            球表面积：{4 * 3.14 * model ** 2}
        </div>
    </div>
}

export default MainWindow;