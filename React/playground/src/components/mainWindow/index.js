import styles from './mainWindow.module.scss'
import {useState} from "react";

const MainWindow = (props) => {
    const [count, setCount] = useState(0);
    return <div className={styles.title}>
        <div className={styles.sl}>
            <div>
                {count}
            </div>
            <button onClick={() => setTimeout(() => setCount(count => count + 1), 1000)}>increase</button>
            <button onClick={() => setTimeout(() => setCount(count => count - 1), 1000)}>desend</button>
        </div>
    </div>
}

export default MainWindow;