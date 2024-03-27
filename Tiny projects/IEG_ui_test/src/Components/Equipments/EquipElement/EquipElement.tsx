import styles from './equipElement.module.scss';

interface IEquipElement {
    //基本描述
    basic_description: string
    //描述
    description: string
    //装备名称
    name: string
    //图片地址
    pic: string
}

/**
 * 单个装备的内容展示
 * @param props
 * @constructor
 */
export const EquipElement = (props: IEquipElement) => {
    return <div className={styles.equipElementMain}>
        <div style={{
            backgroundImage:`url(${props.pic})`
        }} className={styles.equipPic}>
        </div>
        <div className={styles.equipDescMain}>
            <div className={styles.equipName}>
                {props.name}
            </div>
            <div className={styles.equipEffectTitle}>
                效果
            </div>
            {props.basic_description !== '' && <div className={styles.desc}>
                {props.basic_description}
            </div>}
            {props.description !== '' && <div className={styles.desc}>
                {props.description}
            </div>}
        </div>
    </div>
}