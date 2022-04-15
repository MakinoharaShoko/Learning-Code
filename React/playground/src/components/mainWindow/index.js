import styles from './mainWindow.module.scss'
import {
    useRecoilState,
} from 'recoil';
import { testList } from '../../store/recoliTest';
import * as __ from 'lodash';

const setByOtherFunc = ()=>{
    const [list, setList] = useRecoilState(testList);
    setList(state => {
        return{...state,list:state.list.concat(1)}
    });
    setList(state => {
        return{...state,list:state.list.concat(2)}
    });
}

const MainWindow = (props) => {

    const [list, setList] = useRecoilState(testList);
    console.log(list.list);
    const showList = list.list.map((e, i) => {
        return <div key={'list' + i}>{e}</div>
    })
    const addTwo = () => {
        setList(state => {
            return{...state,list:state.list.concat(1)}
        });
        setList(state => {
            return{...state,list:state.list.concat(2)}
        });
    }

    return <div className={styles.title}>
        <div className={styles.sl}>
            {showList}
        </div>
        <div onClick={addTwo}>addTwo</div>
    </div>
}

export default MainWindow;