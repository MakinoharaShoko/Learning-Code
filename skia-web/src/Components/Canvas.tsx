import React, {useEffect, useState} from "react";
import {init, tanzi, tanziId} from "../skia/init";

export default function Canvas() {
    const [str, setStr] = useState(`胸につかえていることを、时は解决してくれない。
忘却のラベルを贴るだけで
心中怀抱的东西
并不能随时间流去而淡解
只是贴上忘却的标签来掩饰
The things that are stuck in your chest, time won't solve them. It just pastes the label of oblivion.`)
    const [fontSize,setFontSize] = useState(48)
    const [delay,setDelay] = useState(100)
    useEffect(() => {
        init().then(() => {
            tanziId.id++;
            tanzi(delay, str,fontSize);
        })
    }, [str,fontSize,delay]);
    return <div style={{display: "flex", flexFlow: 'column', alignItems: 'center'}}>
        <div>
            Font Size:<input type={"range"} onChange={e=>setFontSize(Number(e.target.value))} value={fontSize} min={36} max={64} />{fontSize}{`\u00a0\u00a0\u00a0`}
            Text Display Delay:<input type={"range"} onChange={e=>setDelay(Number(e.target.value))} value={delay} min={0} max={1000} />{delay}
        </div>
        <textarea style={{width: 800, height: 150}} value={str} onChange={(event) => {
            setStr(event.target.value)
        }}/>
        <canvas width={1080} height={720} id={'canvas'}/>
    </div>
}