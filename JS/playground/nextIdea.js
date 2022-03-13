let maxPerformTime = 0;//最大演出时间
let auto = false;//自动状态
let isPerforming = false;//“正在演出”标记
let isDelaying = false;//“正在延时”标记
let autoTimeout;//自动延时
let autoInterval;//自动定时器
let autoDelay = 500;
let currentSentenceID = 1;

const switchAutoNext = ()=>{
    if(auto){
        clearInterval(autoInterval);
        auto = false;
    }else{
        clearInterval(autoInterval);
        auto = true;
        autoInterval = setInterval(()=>{
            if(!isPerforming&&!isDelaying){
                next();
            }
        },100)
    }
}

//用户点击对话框或者屏幕
const clickNext = () => {
    if (isPerforming) {
        //TODO:清空所有动画，直接进入终态，但是在等待delay后再设置演出结束（防止在点击后自动立刻进入下一句）
        isPerforming = false;
        setTimeout(()=>{
            isDelaying = false;
        },autoDelay)
    } 
    else {
        next();
    }
}

const next = () => {
    //读取脚本
    const runResult = scriptRunner(currentSentenceID);
    currentSentenceID = runResult.nextSentenceID;
    //更新最大演出时间
    if (runResult.performTime > maxPerformTime) {
        maxPerformTime = runResult.performTime;
    }
    if (runResult.next) {//是next，解析下句脚本并开始下句的演出
        next();
    } else {//不是next，此时等待一个最大演出时间，演出结束后触发auto来自动或者什么也不做
        waitForPerformEnd(maxPerformTime);
        maxPerformTime = 0;//重置最大演出时间
    }
}

function scriptRunner(sentenceID) {

    //TODO:改变状态，并获得演出所需要的时间
    //如果有演出，立刻开始演出，最大演出时间仅用于使得auto不触发
    //如果有next，那就代表是一个连续动作。
    return {
        performTime: 0,
        next: true,
        nextSentenceID: 1,//下一条语句的行号，由 scriptRunner 返回是因为可能是一个 jump 语句
    }

    //补充：如果是“切换场景”，那就直接切换，然后把performTime 设置为一个很长的时间。
    // 等待新场景载入后，自然会开始跑新场景的第一句。
}

function waitForPerformEnd(time) {
    clearTimeout(autoTimeout);
    //演出结束+delay后，设置演出状态为false，这样就可以auto。
    autoTimeout = setTimeout(() => {
        isPerforming = false;
    }, time + autoDelay)
}