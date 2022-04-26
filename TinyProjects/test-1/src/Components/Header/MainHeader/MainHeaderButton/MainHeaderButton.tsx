import React from "react";
import styles from './mainHeaderButton.module.scss'

export interface IMainHeaderButton {
    isActive: boolean
    children: React.ReactNode
}

export const MainHeaderButton = (props: IMainHeaderButton) => {
    return <button className={props.isActive? styles.buttonMain:`${styles.buttonMain} ${styles.buttonMainOff}`}>
        <div>
            {props.children}
        </div>
        <div className={props.isActive ? styles.underlineOn : styles.underlineOn + ' ' + styles.underlineOff}/>
    </button>
}