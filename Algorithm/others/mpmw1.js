let arr = [
    { id: 1, name: 'group1', parentId: 0 },
    { id: 2, name: 'group2', parentId: 1 },
    { id: 3, name: 'group3', parentId: 1 },
    { id: 4, name: 'group4', parentId: 2 },
    { id: 5, name: 'group5', parentId: 4 }
  ]

  function format(arr){
    const objMap = new Map();
    const retArr = [];
    for(const obj of arr){
        obj.children = [];
        objMap.set(obj.id,obj);
    }
    for(const obj of arr){
        if(obj.parentId === 0){
            retArr.push(obj);
        }else{
            const father = objMap.get(obj.parentId);
            father.children.push(obj);
        }
    }
    return retArr;
  }

  console.log(format(arr));
  console.log(0)