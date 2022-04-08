if (window.Worker) {
    const myWorker = new Worker('./worker.js', {type: 'module'});
    myWorker.postMessage({msg: 12});
    myWorker.onmessage = () => {
        myWorker.terminate();
    }
}