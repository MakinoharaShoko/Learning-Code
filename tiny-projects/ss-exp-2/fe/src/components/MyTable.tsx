import styles from './myTable.module.scss'

interface IElement {
  che: number
  chn: number
  mat: number
  name: string
  phy: number
}

interface IProps {
  data: Array<IElement>
}


export function MyTable(props: IProps) {
  console.log(props.data);
  const tableElement = props.data.map((e, i) => {
    return <tr key={e.name}>
      <th className={styles.elementHead}>{e.name}</th>
      <td className={styles.element}>{e.mat}</td>
      <td className={styles.element}>{e.chn}</td>
      <td className={styles.element}>{e.che}</td>
      <td className={styles.element}>{e.phy}</td>
    </tr>
  })
  return <div style={{display: "flex", justifyContent: "center", fontSize: 'x-large'}}>
    <table>
      <thead>
      <tr>
        <th className={styles.thead} scope="col">姓名</th>
        <th className={styles.thead} scope="col">数学</th>
        <th className={styles.thead} scope="col">语文</th>
        <th className={styles.thead} scope="col">化学</th>
        <th className={styles.thead} scope="col">物理</th>
      </tr>
      </thead>
      <tbody>
      {tableElement}
      </tbody>
    </table>
  </div>
}
