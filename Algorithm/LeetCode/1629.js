/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
var slowestKey = function (releaseTimes, keysPressed) {
    let max = '', maxTime = 0, currentTime = 0;
    keysPressed = keysPressed.split('');
    for (let i = 0; i < releaseTimes.length; i++) {
        if (releaseTimes[i] - currentTime > maxTime) {
            maxTime = releaseTimes[i] - currentTime;
            max = keysPressed[i];
        } else if (releaseTimes[i] - currentTime === maxTime) {
            if (keysPressed[i] > max)
                max = keysPressed[i];
        }
        currentTime = releaseTimes[i];
    }
    return max;
};

let releaseTimes = [9, 29, 49, 50], keysPressed = "cbcd";

console.log(slowestKey(releaseTimes, keysPressed));