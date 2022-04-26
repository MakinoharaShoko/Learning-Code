import styles from './mainHeader.module.scss'
import {MainHeaderButton} from "./MainHeaderButton/MainHeaderButton";

export const MainHeader = ()=>{
    return <div className={styles.mainHeader}>
        <MainHeaderButton isActive={true}>
            时空裂缝
        </MainHeaderButton>
        <MainHeaderButton isActive={false}>
            英雄之黎明
        </MainHeaderButton>
    </div>
}