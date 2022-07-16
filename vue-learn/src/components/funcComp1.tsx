interface IFuncComp1Props {
  propChild: JSX.Element;
}

export default function FuncComp1(props: IFuncComp1Props) {
  return <div>
    this is a component from props.
    {props.propChild}
  </div>
}
