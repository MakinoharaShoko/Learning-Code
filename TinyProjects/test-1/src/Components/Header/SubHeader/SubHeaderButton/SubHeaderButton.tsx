import React from "react";
import styles from './subHeaderButton.module.scss'

export interface ISubHeaderButton {
    //是否激活
    isActive: boolean
    //子内容
    children: React.ReactNode
}

/**
 * 副顶栏的按钮
 * @param props {ISubHeaderButton}
 * @constructor
 */
export const SubHeaderButton = (props: ISubHeaderButton) => {
    return <button className={props.isActive? styles.buttonSub:`${styles.buttonSub} ${styles.buttonSubOff}`}>
        <div>
            {props.children}
        </div>
    </button>
}