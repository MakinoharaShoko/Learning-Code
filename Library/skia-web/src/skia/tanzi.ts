import {TextDrawer} from "@/skia/TextDrawer";
import {splitChars} from "@/skia/strutil";
import {skia} from "@/skia/skia";
import {init} from "@/skia/init";

export const tanzi: {
    id: number;
    textDrawer: TextDrawer | null;
    fontData: ArrayBuffer | null;
} = {
    id: 0,
    textDrawer: null,
    fontData: null
};

export async function tanziFunction(waitTime: number, text: string, fontSize: number) {
    const initialTanzi = tanzi.id;
    if (!tanzi.fontData)
        tanzi.fontData = await fetch('fonts/SourceHanSerifCN-Regular.ttf')
            .then((response) => response.arrayBuffer());
    const textArray = splitChars(text);
    if (!tanzi.fontData) return
    if (!tanzi.textDrawer) {
        if (!skia.isInit)
            await init();
        tanzi.textDrawer = new TextDrawer(skia, tanzi.fontData, fontSize)
    } else {
        tanzi.textDrawer.resetFontSize(fontSize)
    }

    const fadeInTextArray = textArray.map(e => ({text: e, alpha: 0}));
    const checkIsComplete = () => {
        let isComplete = true;
        for (const e of fadeInTextArray) {
            if (e.alpha < 1) {
                isComplete = false
            }
        }
        return isComplete
    }
    let currAddIndex = 0;
    let from = 0;
    const delta = Math.min(0.05, 1 / Math.ceil((waitTime * 5) / 20));
    const startTime = new Date().getTime();
    draw();

    function draw() {
        if (!checkIsComplete()) {
            if (!(tanzi.id === initialTanzi)) {
                return
            }
            const curr = new Date().getTime();
            const pass = curr - startTime;
            currAddIndex = Math.floor(pass / waitTime);
            for (let i = from; i < fadeInTextArray.length && i <= currAddIndex; i++) {
                if (fadeInTextArray[i].alpha < 1)
                    fadeInTextArray[i].alpha += delta;
                else from = i;
            }
            tanzi.textDrawer!.drawAlphaTextArray(fadeInTextArray,40,40)
            requestAnimationFrame(draw)
        }
    }

}