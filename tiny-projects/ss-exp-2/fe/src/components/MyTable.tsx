import styles from './myTable.module.scss'

interface IElement {
  [propsName: string]: any
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
  const tableHead = [];
  for (const e in props.data[0]) {
    if (e === '_id') {
      continue;
    }
    const temp = <th className={styles.thead} scope="col">{e}</th>
    tableHead.push(temp);
  }
  return <div style={{display: "flex", justifyContent: "center", fontSize: 'x-large'}}>
    <table>
      <thead>
      <tr>
        {tableHead}
      </tr>
      </thead>
      <tbody>
      {tableElement}
      </tbody>
    </table>
  </div>
}
