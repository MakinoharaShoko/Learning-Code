import styles from './chooseBasicEquipPanel.module.scss'


interface IChooseBasicEquipPanel {
    // 装备列表
    equipList: Array<any>
    // 设置选择的装备的 ID
    setEquipId: Function
    // 选择的基本装备 ID
    selectId: number
}

/**
 * 选择基本装备
 * @param props {IChooseBasicEquipPanel}
 * @constructor
 */
export const ChooseBasicEquipPanel = (props: IChooseBasicEquipPanel) => {
    const showChooseBasicEquipElement = props.equipList.map((e, i) => {
        const picUrl = e['p'];
        const equipId = parseInt(e['i']);
        let selClassName = styles.pic;
        if (props.selectId === equipId) {
            selClassName = selClassName + ' ' + styles.pic_onSelect;
        }
        return <div style={{backgroundImage: `url(${picUrl})`}} onClick={() => props.setEquipId(equipId)}
                    className={selClassName} key={'chooseBasicEquip' + i}/>
    })

    return <div className={styles.chooseBasicEquipMain}>
        {showChooseBasicEquipElement}
    </div>
}