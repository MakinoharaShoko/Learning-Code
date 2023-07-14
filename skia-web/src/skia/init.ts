import CanvasKitInit, {CanvasKit, FontSlant, FontWeight, FontWidth, Surface} from "canvaskit-wasm";
import {splitChars} from "@/skia/strutil";
import {TextDrawer} from "@/skia/TextDrawer";

export const skia: {
    CanvasKit: CanvasKit | null,
    surface: Surface | null
    isInit: boolean
} = {CanvasKit: null, surface: null, isInit: false}

export let tanziId = {id: 0};

export async function init() {
    if (!skia.isInit) {
        const CanvasKit = await CanvasKitInit({
            locateFile(file: string): string {
                return `./${file}`
            }
        })
        skia.CanvasKit = CanvasKit
        const canvasElement: HTMLElement | null = document.getElementById('canvas')
        const canvasInstance = canvasElement as HTMLCanvasElement
        if (canvasInstance) {
            skia.surface = CanvasKit.MakeWebGLCanvasSurface(canvasInstance)
            skia.isInit = true;
        }
    }

}

const drawTrig = () => {
    const CanvasKit = skia.CanvasKit!
    const paint = new CanvasKit.Paint();
    paint.setColor(CanvasKit.Color4f(0.9, 0, 0, 1.0));
    paint.setStyle(CanvasKit.PaintStyle.Stroke);
    paint.setAntiAlias(true);
    const path = new CanvasKit.Path()
    path.moveTo(10, 10)
    path.lineTo(100, 10)
    path.lineTo(10, 100)
    path.close()
    const canvas = skia.surface!.getCanvas()!
    canvas.clear(CanvasKit.WHITE);
    canvas.drawPath(path, paint)
    skia.surface!.flush()
}


const aswait = (time: number) => {
    return new Promise((r) => {
        setTimeout(() => r(true), time)
    })
}

let textDrawer: TextDrawer | null = null;

let fontData: ArrayBuffer | null = null

export async function tanzi(waitTime: number, text: string, fontSize: number) {
    const initialTanzi = tanziId.id;
    if (!fontData)
        fontData = await fetch('fonts/SourceHanSerifCN-Regular.ttf')
            .then((response) => response.arrayBuffer());
    const textArray = splitChars(text);
    console.log(textArray)
    if (!fontData) return
    if (!textDrawer) {
        textDrawer = new TextDrawer(skia, fontData, fontSize)
    } else {
        textDrawer.resetFontSize(fontSize)
    }
    // let textToDraw = '';
    for (const word of textArray) {
        if (tanziId.id === initialTanzi) {
            // textToDraw = textToDraw + word
            // console.log(textToDraw)
            // textDrawer.drawText(textToDraw)
            textDrawer.drawText(word)
            await aswait(waitTime)
        } else return
    }
}


// const drawText = (text: string, fontData: ArrayBuffer, fontSize: number) => {
//
// }

