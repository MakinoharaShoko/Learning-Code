import init from './pkg/hello_wasm.js';
import {greet} from './pkg/hello_wasm.js';

function run() {
    // use the function ex_function1 here
    greet('123')
}

init().then(run)