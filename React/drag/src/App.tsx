import {DragDropContext, Draggable, Droppable} from 'react-beautiful-dnd';
import './App.css'
import {useState} from "react";


/**
 * 测试 React-beautiful-dnd
 * ！！！注意，在React.StrictMode 下不起作用！！！
 * ！！！该问题目前未修复！！！
 * @constructor
 */
function App() {
  //初始化数据
  const getItems = (count: number) => Array.from({length: count}, (v, k) => k).map(k => ({
    id: `item-${k + 1}`,
    content: `this is content ${k + 1}`
  }));
  const initialItems = getItems(11);

  // 重新记录数组顺序
  const reorder = (list: Array<any>, startIndex: number, endIndex: number) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };
  const [items, setItems] = useState(initialItems);

  function onDragEnd(result: any) {
    if (!result.destination) {
      return;
    }
    setItems(items => [...reorder(
      items,
      result.source.index,
      result.destination.index
    )]);
  }
  return <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided, snapshot) => (
          // 下面开始书写容器
          <div
            //provided.droppableProps应用的相同元素.
            {...provided.droppableProps}
            // 为了使 droppable 能够正常工作必须 绑定到最高可能的DOM节点中provided.innerRef.
            ref={provided.innerRef}
          >
            {items.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided, snapshot) => (
                  // 下面开始书写可拖拽的元素
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    {item.content}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
  </DragDropContext>
}

export default App
