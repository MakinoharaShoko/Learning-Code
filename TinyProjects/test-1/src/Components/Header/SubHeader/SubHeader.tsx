import styles from './subHeader.module.scss'
import {SubHeaderButton} from "./SubHeaderButton/SubHeaderButton";

export const SubHeader = () => {
    return <div className={styles.subHeader_main}>
        <SubHeaderButton isActive={false}>
            英雄
        </SubHeaderButton>
        <SubHeaderButton isActive={true}>
            装备
        </SubHeaderButton>
        <SubHeaderButton isActive={false}>
            羁绊
        </SubHeaderButton>
        <SubHeaderButton isActive={false}>
            小小英雄
        </SubHeaderButton>
    </div>
}