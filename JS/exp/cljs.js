const cljs = require('cloudlogjs');

const logger = new cljs();
logger.init('https://cl.msfasr.com/',
    'mongodb+srv://makinohara:mongo-123456@master.svnck.mongodb.net/myFirstDatabase?retryWrites=true&w=majority	')






























logger.setCollection('test');
logger.setLevel('DEBUG');
logger.fatal('要是系统崩溃了的话，运维生涯就结束了罢');