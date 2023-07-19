import {CanvasKit, Surface} from "canvaskit-wasm";

export const skia: {
    CanvasKit: CanvasKit | null,
    surface: Surface | null
    isInit: boolean
} = {CanvasKit: null, surface: null, isInit: false}

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