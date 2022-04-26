import React from "react";
import styles from './subHeaderButton.module.scss'

export interface ISubHeaderButton {
    isActive: boolean
    children: React.ReactNode
}

export const SubHeaderButton = (props: ISubHeaderButton) => {
    return <button className={props.isActive? styles.buttonSub:`${styles.buttonSub} ${styles.buttonSubOff}`}>
        <div>
            {props.children}
        </div>
    </button>
}