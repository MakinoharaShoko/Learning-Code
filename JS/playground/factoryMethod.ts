/**
 * @interface ICar 汽车接口
 */

type producerType = 'audi' | 'benz' | 'bmw';
interface ICar {
    // 制造商
    producer: producerType
    // 驾驶
    drive: Function
    // 停止
    stop: Function
}

class carFactory {
    constructor() { }
    produce(producer: producerType): ICar {
        // 定义驾驶的方法
        const drive = () => {
            console.log('驾驶汽车');
        }
        // 定义停止的方法
        const stop = () => {
            console.log('停止汽车');

        }
        // 定义制造商
        const thisProducer = producer;
        // 得到实例化的类
        return {
            producer: thisProducer,
            drive,
            stop
        }
    }
}


const factory = new carFactory();
const audiCar: ICar = factory.produce('audi');
const benzCar: ICar = factory.produce('benz');
audiCar.drive();
benzCar.stop();