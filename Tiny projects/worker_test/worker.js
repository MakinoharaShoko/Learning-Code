import init from './pkg/hello_wasm.js';
import {wasm_add} from './pkg/hello_wasm.js';

let isWasmInit = false; //判断是否完成wasm编译

init().then(() => isWasmInit = true); //初始化Wasm（编译）

onmessage = function (m) {
    const data = m.data;
    if (isWasmInit) { //在接收到 message 时，wasm 已经完成编译。
        console.log('Wasm init before message');
        run();
    } else { //在接收到 message 时，wasm 没有完成编译，所以先编译再执行。
        console.log('Wasm not init before message');
        init().then(() => {
                run();
                isWasmInit = true;
            }
        );
    }

    function run() {
        const res = wasm_add(data[0], data[1]); //调用具体的 wasm 函数
        postMessage(res);
    }
}