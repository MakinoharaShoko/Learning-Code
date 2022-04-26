import {useEffect, useState} from "react";
import {ChooseEquipPanel} from "./ChooseEquipPanel/ChooseEquipPanel";
import styles from './equipments.module.scss'
import {EquipElement} from "./EquipElement/EquipElement";
import {ChooseBasicEquipPanel} from "./ChooseBasicEquipPanel/ChooseBasicEquipPanel";

export const Equipments = () => {
    const [panelIndex, setPanelIndex] = useState(0); //选择面板的 index
    const [equipData, setEquipData] = useState([]); //装备数据
    const setEquipIndex = (i: number) => {
        setPanelIndex(i)
    }

    /**
     * 选择面板的选项（为方便后期拓展，使用数组描述）
     */
    const equipPanelData = [
        '常规装备',
        '特殊装备'
    ]

    /**
     * 获取装备信息
     */
    useEffect(() => {
        fetch('https://game.gtimg.cn/images/jk/jkimg/test/e.json')
            .then(response => response.json())
            .then(setEquipData);
    }, [])

    const equipElementList: any = [];

    /**
     * 提取基础装备
     */
    const basicEquip = equipData.filter(e => e['t'] === '基础装备');
    

    /**
     * 生成特殊装备的列表
     */
    if (panelIndex === 1) {
        equipData.forEach((e, i) => {
            if (e['t'] === '特殊装备') {
                equipElementList.push(
                    <EquipElement key={`特殊装备${i}`}
                                  basic_description={e['bd']}
                                  description={e['d']}
                                  name={e['n']}
                                  pic={e['p']}/>
                );
            }
        })
    }

    /**
     * 根据选择的基础装备，生成合成装备的列表
     */
    if (panelIndex === 0) {

    }

    return <>
        <div className={styles.chooseBoxMain}>
            <ChooseEquipPanel setActiveIndex={setEquipIndex} activeIndex={panelIndex} panelData={equipPanelData}/>
            {panelIndex === 0 && <ChooseBasicEquipPanel/>}
        </div>
        <div className={styles.equipList}>
            {equipElementList}
        </div>
    </>
}