import React from "react";
import styles from './mainHeaderButton.module.scss'

export interface IMainHeaderButton {
    //是否激活
    isActive: boolean
    //子内容
    children: React.ReactNode
}

/**
 * 主顶栏的按钮
 * @param props {IMainHeaderButton}
 * @constructor
 */
export const MainHeaderButton = (props: IMainHeaderButton) => {
    return <button className={props.isActive? styles.buttonMain:`${styles.buttonMain} ${styles.buttonMainOff}`}>
        <div>
            {props.children}
        </div>
        <div className={props.isActive ? styles.underlineOn : styles.underlineOn + ' ' + styles.underlineOff}/>
    </button>
}