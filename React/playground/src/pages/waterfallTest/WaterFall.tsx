import {useEffect, useState} from "react";

interface IWFProps {
  list: number[],
}

export default function WaterFall(props: IWFProps) {
  const [left, setLeft] = useState<any>([]);
  const [right, setRight] = useState<any>([]);
  const [vc, setVc] = useState(props.list);
  const vcList = vc.map((e, i) => {
    return <div style={{height: `${e}px`}}>{i}</div>
  })
  useEffect(() => {
    setTimeout(() => {
      const rootNode = document.getElementById('121212');
      const heightArr = [];
      const cnodes = rootNode!.childNodes;
      for (let i = 0; i < cnodes.length; i++) {
        const element = cnodes[i] as HTMLElement;
        heightArr.push({content: i, height: element.clientHeight});
      }
      // 构建双栏瀑布表
      const waterfallListLeft = [];
      const waterfallListRight = [];
      let heightL = 0;
      let heightR = 0;
      for (const e of heightArr) {
        if (heightL <= heightR) {
          heightL += e.height;
          waterfallListLeft.push(e);
        } else {
          heightR += e.height;
          waterfallListRight.push(e);
        }
      }
      console.log(waterfallListLeft);
      console.log(waterfallListRight);
      setLeft(waterfallListLeft);
      setRight(waterfallListRight);
    }, 0);
  }, [vc]);

  const leftArea = left.map((e: any) => {
    return <div key={e.content+e.height} style={{height: e.height, backgroundImage: 'linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)'}}>
      {e.content}
    </div>
  })

  const rightArea = right.map((e: any) => {
    return <div key={e.content+e.height} style={{height: e.height, backgroundImage: 'linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)'}}>
      {e.content}
    </div>
  })


  return <div>
    <div id={'121212'} style={{position: "absolute", zIndex: 2, opacity: 0}}>
      {vcList}
    </div>
    <div style={{display: "flex",justifyContent:'center'}}>
      <div style={{width: '40%'}}>
        {leftArea}
      </div>
      <div style={{width: '40%'}}>
        {rightArea}
      </div>
    </div>
  </div>
}
