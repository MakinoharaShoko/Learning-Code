/**
 * @param {string} path
 * @return {string}
 */
const simplifyPath = function (path) {
    path = path.split('/');
    let result = [];
    for (let e of path) {
        if (e === '..') {
            if (path.length >= 1)
                result.pop();
        }
        else if (e === '.' || e === '') {

        } else {
            result.push(e);
        }
    }
    result = result.reduce((a, b) => {
        return a + `/${b}`
    }, '')
    if(result ===''){
        return '/'
    }
    return result;
};

simplifyPath('/../../../c/')