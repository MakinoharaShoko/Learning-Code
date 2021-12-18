import {combineReducers, createStore} from "redux";
import inputValue from './reducer/inputValue'
import list from "./reducer/list";

const reducer = combineReducers({
    inputValue,
    list
})

const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;