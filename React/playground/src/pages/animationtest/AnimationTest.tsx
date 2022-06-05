import styles from './animationtest.module.scss'

export function AnimationTest(){
    return <div className={styles.container}>
        <div className={styles.box1}/>
        <div className={styles.box3}>
            <div className={styles.text}>
            海贼王<br/>
            简介:传说中海贼王哥尔·D·罗杰在死前说出他留下了具有财富、名声、力量的宝藏「ONE PIECE」，许多人为了争夺ONE PIECE，争相出海，许多海贼开始树立霸权，而形成了大海贼时代。十年后，草帽小子 蒙其·D·路飞为了要实现与因救他而断臂的海贼红发香克斯的约定而出海，在遥远的路途上找寻着志同道合的伙伴，一起进入「伟大的航道」，目标当上海贼王。
            </div>
            </div>
        <div className={styles.box2}>海贼王</div>
    </div>
}