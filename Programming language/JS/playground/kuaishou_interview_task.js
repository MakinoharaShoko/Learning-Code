const insert = (input) => {
    const root = input[0];
    const m = new Map();
    input.forEach(e => {
        if (!m.has(e.id)) {
            m.set(e.id, e);
        }
    });
    input.forEach(e => {
        if (e.hasOwnProperty('parentId')) {
            const parentId = e['parentId'];
            if (m.has(parentId)) {
                if (m.get(parentId).hasOwnProperty('children')) {
                    m.get(parentId)['children'].push(e);
                } else {
                    m.get(parentId)['children'] = [e];
                }
            }
        }
    })
    return root;
}

console.log(insert([
    { id: 0, val: 2 },
    { id: 1, val: 13, parentId: 0 },
    { id: 2, val: 13, parentId: 1 },
    { id: 3, val: 13, parentId: 2 },
    { id: 4, val: 13, parentId: 4 },
    { id: 5, val: 13, parentId: 3 },
    { id: 6, val: 13, parentId: 3 },
    { id: 7, val: 13, parentId: 8 },
]));