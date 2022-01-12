const cljs = require('cloudlogjs');

const logger = new cljs();
logger.init('http://localhost:3001')
logger.setLevel('DEBUG');
logger.info('私，下北泽程序员先辈。24岁，事码农');