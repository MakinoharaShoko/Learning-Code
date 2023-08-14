import SceneParser from "webgal-parser"

const script = `
fdsafa
dasf
dsafas:DASfsafdsa
asdfasfas;adsfasfsaf
sadf -adsfas ;asfd
as:asdf -asdf;asfd
dsaf
adsf
dsafadsfdsadf`

const parser = new SceneParser(() => { }, (asset, type) => asset, [], [])

console.log(parser.parse(script, 'sctipt', 'script'));
