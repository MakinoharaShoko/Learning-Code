MyRace = function (iterator) {  
    return new Promise((resolve,reject) => {
        for(let e of iterator){
            Promise.resolve(e)
            .then((data) => {
                    resolve(data)
            })
            .catch(e => {
                reject(e)
            })
        }
    })
}