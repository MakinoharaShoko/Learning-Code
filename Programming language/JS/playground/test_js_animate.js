// 示例动画
const draw = (progress) => {
    ball.style.transform = `translate(${progress}px, 0)`;
}
// 沿着x轴匀速运动
const animation = animate({
    mode: 'FORWARD',
    state: 'STOP',
    speed: 1,
    duration: 1000,
    easing(timeFraction) {
        if (state === 'RUN') {
            return timeFraction * 100 * speed;
        }
        if (state === 'REV') {
            return (duration - timeFraction) * 100 * speed;
        }
    },
    draw,
});

// 分别实现以下动画API
animation.play = () => {
    this.state = 'RUN';
};   // 开始播放（动画默认不开始，需要手动执行play）
animation.pause = () => {
    this.state = 'STOP';
};  // 暂停，执行play会继续执行
animation.cancel = () => {
    this.state = 'STOP';
    this.timeFraction = 0;
}; // 终止动画，直接回到终止态
animation.reverse = () => {
    this.state = 'REV';
}; // 倒序播放动画
animation.playRate = () => {
    this.speed = 0.6;
}; // 以原速的0.6倍执行动画