import {useEffect, useState} from "react";
import {ChooseEquipPanel} from "./ChooseEquipPanel/ChooseEquipPanel";
import styles from './equipments.module.scss'
import {EquipElement} from "./EquipElement/EquipElement";
import {ChooseBasicEquipPanel} from "./ChooseBasicEquipPanel/ChooseBasicEquipPanel";

export const Equipments = () => {
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

    const [panelIndex, setPanelIndex] = useState(0); //选择面板的 index
    const [equipData, setEquipData] = useState([]); //装备数据
    const [selectBasicEquipId, setSelectBasicEquipId] = useState(0);
    const setEquipIndex = (i: number) => {
        setPanelIndex(i)
    }

    let filtedData: any = [];

    /**
     * 提取基础装备
     */
    const basicEquip = equipData.filter(e => e['t'] === '基础装备');

    /**
     * 根据选择的基础装备，生成合成装备的列表
     */
    if (panelIndex === 0) {
        filtedData = equipData.filter(e => {
            const c1 = parseInt(e['c1']);
            const c2 = parseInt(e['c2']);
            return selectBasicEquipId === c1 || selectBasicEquipId === c2;
        })
    }

    /**
     * 生成特殊装备的列表
     */
    if (panelIndex === 1) {
        filtedData = equipData.filter(e => e['t'] === '特殊装备');
    }

    const equipElementList = filtedData.map((e: any, i: number) => (
            <EquipElement key={`装备${i}`}
                          basic_description={e['bd']}
                          description={e['d']}
                          name={e['n']}
                          pic={e['p']}/>
        )
    );
    return <>
        <div className={styles.chooseBoxMain}>
            <ChooseEquipPanel setActiveIndex={setEquipIndex} activeIndex={panelIndex} panelData={equipPanelData}/>
            {panelIndex === 0 && <ChooseBasicEquipPanel setEquipId={setSelectBasicEquipId} selectId={selectBasicEquipId}
                                                        equipList={basicEquip}/>}
        </div>
        <div className={styles.equipList}>
            {equipElementList}
        </div>
    </>
}