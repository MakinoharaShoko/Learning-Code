onmessage = function (e) {
    const data = e.data;
    const workerResult = data[0] + data[1];
    postMessage(workerResult);
}