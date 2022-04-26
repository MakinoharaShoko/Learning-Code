import styles from './equipElement.module.scss';

interface IEquipElement {
    basic_description: string
    description: string
    name: string
    pic: string
}

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