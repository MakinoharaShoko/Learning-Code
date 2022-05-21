if (window.Worker) {
    //加载worker，注意第二个参数要有，否则无法导入 module
    const myWorker = new Worker('./worker.js', {type: 'module'});
    myWorker.postMessage([1, 2]);//发送消息
    myWorker.postMessage([3, 4]);//发送消息
    setTimeout(() => {
        myWorker.postMessage([7, 8])
    }, 1000); //1秒后发送消息，用于在编译完成后使 worker 收到消息。
    myWorker.onmessage = (m) => {
        const data = m.data;
        console.log('data from wasm: ' + data); //拿到 wasm 计算的结果
    }
}