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
    const arr = [];
    for (const key in e) {
      if (key === '_id')
        continue;
      arr.push(<th className={styles.elementHead}>{e[key]}</th>)
    }
    return <tr key={e.name}>
      {arr}
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
