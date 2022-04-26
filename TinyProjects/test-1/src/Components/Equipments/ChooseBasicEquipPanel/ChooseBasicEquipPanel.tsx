import styles from './chooseBasicEquipPanel.module.scss'

interface IChooseBasicEquipPanel {
    equipList: Array<any>
    setEquipId: Function
    selectId: number
}

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