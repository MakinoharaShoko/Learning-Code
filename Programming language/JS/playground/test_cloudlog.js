const cljs = require('cloudlogjs');
const logger = new cljs();

logger.init('https://log.msfasr.com');
logger.setCollection('Playground');
logger.setLevel('DEBUG');
logger.error('错误');
