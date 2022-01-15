const cljs = require('cloudlogjs');
//或： import cljs from 'cloudlogjs';

const logger = new cljs();//初始化
logger.init('https://log.msfasr.com')//设置后端及数据库链接
logger.setLevel('DEBUG');//只会显示DEBUG级别以上的日志
logger.trace('这是一个TRACE级别日志');
logger.debug('这是一条debug信息',{name:'info',message:'Hello, CloudLog!'});
logger.info('这是一条消息');
logger.warn('这是一条警告');
logger.error('这是一条错误信息');
logger.fatal('这是一条致命错误信息');