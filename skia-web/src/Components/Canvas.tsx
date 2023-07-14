import React, {useEffect} from "react";
import {init} from "../skia/init";

export default function Canvas()
{
    useEffect(() => {
        init()
    }, []);
    return <canvas width={1080} height={720} style={{height:'720px',width:'1080px'}} id={'canvas'}/>
}