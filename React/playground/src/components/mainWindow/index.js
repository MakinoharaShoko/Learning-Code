import { useStore } from 'reto'
import stage from '../../store/stage'
import styles from './mainWindow.module.scss'

const MainWindow = (props) => {
    const currentStage = useStore(stage)

    return <div className={styles.title}>
        <div onClick={() => {
            const r = Math.random();
            currentStage.updateStage('color',r);
        }}>change</div>
        {currentStage.stage.color}
    </div>
}

export default MainWindow;