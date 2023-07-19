import CanvasKitInit from "canvaskit-wasm";
import {skia} from "@/skia/skia";


export async function init() {
    if (!skia.isInit) {
        const CanvasKit = await CanvasKitInit({
            locateFile(file: string): string {
                return `./assets/${file}`
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
