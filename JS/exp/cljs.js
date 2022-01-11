const cljs = require('cloudlogjs');

const logger = new cljs();
logger.init('https://cl.msfasr.com/','mongodb+srv://Kamome:Makinohara31415@ics-mongodb.kcslx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')






























logger.setCollection('test');
logger.setLevel('DEBUG');
logger.debug('测试数据展示',{name:'田所浩二',id:'114514'});