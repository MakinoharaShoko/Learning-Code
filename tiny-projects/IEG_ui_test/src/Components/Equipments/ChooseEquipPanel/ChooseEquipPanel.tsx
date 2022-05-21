import styles from './chooseEquipPanel.module.scss'


/**
 * @interface IChooseEquipPanel 选择装备类型
 */
interface IChooseEquipPanel {
    //选择的装备标签索引
    activeIndex: number
    //装备的标签列表
    panelData: Array<string>
    //更新选择的标签
    setActiveIndex: Function
}

/**
 * 选择基本装备的按钮列表
 * @param props
 * @constructor
 */

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