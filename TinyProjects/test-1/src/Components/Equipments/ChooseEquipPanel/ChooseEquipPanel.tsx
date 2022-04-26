import styles from './chooseEquipPanel.module.scss'

interface IChooseEquipPanel {
    activeIndex: number
    panelData: Array<string>
    setActiveIndex: Function
}

export const ChooseEquipPanel = (props: IChooseEquipPanel) => {
    /**
     * 循环生成按钮
     */
    const showButtons = props.panelData.map((e, i) => {
        if (i !== props.activeIndex) {
            return <button key={'选项' + i} onClick={() => props.setActiveIndex(i)}
                           className={styles.chooseEquipButton}>{e}</button>
        } else {
            return <button key={'选项' + i} onClick={() => props.setActiveIndex(i)}
                           className={styles.chooseEquipButton + ' ' + styles.chooseEquipButtonOn}>{e}</button>
        }
    })

    return <div className={styles.chooseEquipMain}>
        {showButtons}
    </div>
}