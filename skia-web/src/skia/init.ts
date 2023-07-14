import CanvasKitInit, {CanvasKit, FontSlant, FontWeight, FontWidth, Surface} from "canvaskit-wasm";

export const skia: {
    CanvasKit: CanvasKit | null,
    surface: Surface | null
    isInit: boolean
} = {CanvasKit: null, surface: null, isInit: false}

export let tanziId = {id:0};

export async function init() {
    if (!skia.isInit) {
        const CanvasKit = await CanvasKitInit()
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

export async function tanzi(waitTime: number, text: string) {
    const initialTanzi = tanziId.id;
    const robotoData = await fetch('fonts/SourceHanSerifCN-Regular.ttf')
        .then((response) => response.arrayBuffer());
    const textArray = text.split(' ');
    let textToDraw = '';
    for (const word of textArray) {
        if(tanziId.id === initialTanzi){
            textToDraw = textToDraw + word + ' '
            drawText(textToDraw, robotoData)
            await aswait(waitTime)
        }
    }
}


const drawText = (text: string, fontData: ArrayBuffer) => {
    const CanvasKit = skia.CanvasKit!;
    const canvas = skia.surface?.getCanvas()!
    canvas.clear(CanvasKit.Color4f(0.9, 0.9, 0.9, 1.0));

    const fontMgr = CanvasKit.FontMgr.FromData(fontData);
    const paraStyle = new CanvasKit.ParagraphStyle({
        textStyle: {
            fontSize: 64,
        },
        textAlign: CanvasKit.TextAlign.Left,
    });
    const builder = CanvasKit.ParagraphBuilder.Make(paraStyle, fontMgr!);

    const transparentPaint = new CanvasKit.Paint();
    transparentPaint.setColor(CanvasKit.TRANSPARENT);
    transparentPaint.setStyle(CanvasKit.PaintStyle.Fill);
    const shader = CanvasKit.Shader.MakeLinearGradient(
        [0, 64], // 渐变的起点
        [0, 160], // 渐变的终点
        [CanvasKit.Color(46, 169, 223, 1), CanvasKit.Color(0, 92, 175, 1)], // 渐变的颜色
        [0, 1], // 颜色的位置
        CanvasKit.TileMode.Repeat,
    );

    // 创建一个使用该 Shader 的 Paint
    const paint = new CanvasKit.Paint();
    paint.setStyle(CanvasKit.PaintStyle.Fill);
    paint.setShader(shader);
    paint.setAntiAlias(true);
    builder.pushPaintStyle({
        backgroundColor: CanvasKit.Color4f(1, 1, 1, 1), // White background color
        color: CanvasKit.Color4f(0, 0, 0, 1), // Black color
        decoration: 0, // No decoration
        decorationColor: CanvasKit.Color4f(0, 0, 0, 1), // Black decoration color
        decorationThickness: 1.0, // Default decoration thickness
        decorationStyle: CanvasKit.DecorationStyle.Solid, // Solid decoration style
        fontFamilies: ['Arial'], // Font family
        fontSize: 64, // Font size
        fontStyle: {
            weight: CanvasKit.FontWeight.Normal,
            width: CanvasKit.FontWidth.Normal,
            slant: CanvasKit.FontSlant.Oblique,
        }, // Normal font style
        foregroundColor: CanvasKit.Color4f(0, 0, 0, 1), // Black foreground color
        heightMultiplier: 1.5, // Default height multiplier
        halfLeading: false, // Default half leading
        letterSpacing: 0.0, // Default letter spacing
        locale: 'en', // Default locale
        shadows: [
            {
                color: [0, 0, 0, 0.5],
                blurRadius: 5,
                offset: [2, 2]
            },
            {
                color: CanvasKit.Color4f(1, 1, 1, 1), // Border color (white)
                offset: [1, -1], // Offset
                blurRadius: 0, // Blur radius
            },
            {
                color: CanvasKit.Color4f(1, 1, 1, 1), // Border color (white)
                offset: [-1, -1],
                blurRadius: 0,
            },
            {
                color: CanvasKit.Color4f(1, 1, 1, 1), // Border color (white)
                offset: [1, 1],
                blurRadius: 0,
            },
            {
                color: CanvasKit.Color4f(1, 1, 1, 1), // Border color (white)
                offset: [-1, 1],
                blurRadius: 0,
            },
        ], // No shadows
        textBaseline: CanvasKit.TextBaseline.Alphabetic, // Alphabetic text baseline
        wordSpacing: 0.0, // Default word spacing
    }, paint, transparentPaint)
    builder.addText(text);
    const paragraph = builder.build();
    paragraph.layout(1000); // width in pixels to use when wrapping text
    console.log(paragraph.getLineMetrics())
    canvas.drawParagraph(paragraph, 40, 40);
    skia.surface!.flush();
}