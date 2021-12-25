import AniScroll from "aniscroll";
import changeBG from "./bgController";

const RunInit = () => {
    setAni();
}

function setAni() {
    let ani = new AniScroll();
    ani.init(500);
    ani.addElementController('testElement1', 1, 0.5, () => {
        changeBG('/img/testBG03.png', 'bg')
    });
    ani.addElementController('testElement2', 600, 0.7, () => {
    });
    ani.addElementController('testElement3', 2600, 0.5,
        () => {
            changeBG('/img/bg2.png', 'bg');
            console.log(ani.currentPosition)
        });
    ani.addElementController('testElement4', 3200, 0.7, () => {
        console.log(ani.currentPosition)
    });
}

export default RunInit;