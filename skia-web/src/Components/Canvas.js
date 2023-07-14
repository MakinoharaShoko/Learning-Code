import React, { useEffect, useState } from "react";
import { init, tanzi, tanziId } from "../skia/init";
export default function Canvas() {
    const [str, setStr] = useState('');
    useEffect(() => {
        init().then(() => {
            tanziId.id++;
            tanzi(200, str);
        });
    }, [str]);
    return React.createElement("div", { style: { display: "flex", flexFlow: 'column', alignItems: 'center' } },
        React.createElement("textarea", { style: { width: 500, height: 200 }, value: str, onChange: (event) => {
                setStr(event.target.value);
            } }),
        React.createElement("canvas", { width: 1080, height: 720, style: { height: '720px', width: '1080px' }, id: 'canvas' }));
}
