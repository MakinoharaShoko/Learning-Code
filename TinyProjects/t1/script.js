if (window.Worker) {
    const myWorker = new Worker('./worker.js');
    myWorker.postMessage([1, 2]);
    myWorker.onmessage = (m) => {
        console.log(m.data);
        myWorker.terminate();
    }
}