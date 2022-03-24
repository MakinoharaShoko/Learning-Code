import { useStore } from 'reto'
import stage from '../../store/stage'
import styles from './mainWindow.module.scss'

const MainWindow = (props) => {
    return <div className={styles.title}>
    <div className={styles.sl}>
        <div className={styles.element}>1</div>
        <div className={styles.element}>2</div>
        <div className={styles.element}>3</div>
    </div>
    </div>
}

export default MainWindow;