import CanvasKitInit, {
    CanvasKit,
    FontSlant,
    FontWeight,
    FontWidth,
    Paint,
    ParagraphBuilder,
    Surface
} from "canvaskit-wasm";
import {skia} from "@/skia/init";
import {redAlphaText} from "@/skia/strutil";

export class TextDrawer {
    private CanvasKit: CanvasKit
    private paraStyle;
    private transparentPaint: any
    private shader: any
    private paint: Paint | null | undefined
    private builder: ParagraphBuilder
    private canvas;
    private fontMgr
    private fontSize: number = 48;
    private currentAlphaf = 1;

    constructor(skia: {
        CanvasKit: CanvasKit | null,
        surface: Surface | null
        isInit: boolean
    }, fontData: ArrayBuffer, fontSize: number) {
        this.CanvasKit = skia.CanvasKit!;
        this.canvas = skia.surface?.getCanvas()!
        this.canvas.clear(this.CanvasKit.Color4f(0.9, 0.9, 0.9, 1.0));

        this.fontMgr = this.CanvasKit.FontMgr.FromData(fontData);
        this.paraStyle = new this.CanvasKit.ParagraphStyle({
            textStyle: {
                fontSize: 64,
            },
            textAlign: this.CanvasKit.TextAlign.Left,
        });
        this.builder = this.CanvasKit.ParagraphBuilder.Make(this.paraStyle, this.fontMgr!);

        this.resetFontSize(fontSize)

    }

    // public resetPainterAlpha(){
    //     this.paint?.setAlphaf(0);
    // }

    public drawAlphaTextArray(texts: {
        text: string,
        alpha: number
    }[]) {
        let resetCount = 0;
        let drawCount = 0;
        this.resetBuilderOnlyAlpha(1)
        const reduTexts = redAlphaText(texts)
        for (const e of reduTexts) {
            if (e.alpha === 0) {
                continue;
            }
            if (this.currentAlphaf !== e.alpha) {
                resetCount++
                this.currentAlphaf = e.alpha
                this.paint?.setAlphaf(e.alpha);
                this.resetBuilderStyle(e.alpha)
            }
            this.drawText(e.text)
            drawCount++;
        }
    }

    public drawText(text: string) {
        this.builder.addText(text);
        const paragraph = this.builder.build();
        paragraph.layout(1000); // width in pixels to use when wrapping text
        this.canvas.clear(this.CanvasKit.TRANSPARENT)
        this.canvas.drawParagraph(paragraph, 40, 40);
        skia.surface!.flush();
    }

    public resetFontSize(fontSize: number) {
        this.fontSize = fontSize;
        this.builder.reset();
        this.paraStyle = new this.CanvasKit.ParagraphStyle({
            textStyle: {
                fontSize: this.fontSize,
            },
            textAlign: this.CanvasKit.TextAlign.Left,
        });
        this.builder = this.CanvasKit.ParagraphBuilder.Make(this.paraStyle, this.fontMgr!);

        this.transparentPaint = new this.CanvasKit.Paint();
        this.transparentPaint.setColor(this.CanvasKit.TRANSPARENT);
        this.transparentPaint.setStyle(this.CanvasKit.PaintStyle.Fill);
        this.shader = this.CanvasKit.Shader.MakeLinearGradient(
            [0, this.fontSize], // 渐变的起点
            [0, this.fontSize * 2.5], // 渐变的终点
            [this.CanvasKit.Color(46, 169, 223, 1), this.CanvasKit.Color(0, 92, 175, 1)], // 渐变的颜色
            [0, 1], // 颜色的位置
            this.CanvasKit.TileMode.Repeat,
        );

        // 创建一个使用该 Shader 的 Paint
        console.log('build shader')
        this.paint = new this.CanvasKit.Paint();
        this.paint.setStyle(this.CanvasKit.PaintStyle.Fill);
        this.paint.setShader(this.shader);
        this.paint.setAntiAlias(true);
        this.resetBuilderOnlyAlpha(1);
    }

    public resetBuilderOnlyAlpha(alpha: number) {
        this.builder.reset();
        this.paraStyle = new this.CanvasKit.ParagraphStyle({
            textStyle: {
                fontSize: this.fontSize,
            },
            textAlign: this.CanvasKit.TextAlign.Left,
        });
        this.builder = this.CanvasKit.ParagraphBuilder.Make(this.paraStyle, this.fontMgr!);
        this.resetBuilderStyle(alpha);
    }

    private resetBuilderStyle(alpha = 1) {
        this.builder.pushPaintStyle({
            backgroundColor: this.CanvasKit.Color4f(1, 1, 1, alpha), // White background color
            color: this.CanvasKit.Color4f(0, 0, 0, alpha), // Black color
            decoration: 0, // No decoration
            decorationColor: this.CanvasKit.Color4f(0, 0, 0, alpha), // Black decoration color
            decorationThickness: 1.0, // Default decoration thickness
            decorationStyle: this.CanvasKit.DecorationStyle.Solid, // Solid decoration style
            fontFamilies: ['Arial'], // Font family
            fontSize: this.fontSize, // Font size
            fontStyle: {
                weight: this.CanvasKit.FontWeight.Normal,
                width: this.CanvasKit.FontWidth.Normal,
                slant: this.CanvasKit.FontSlant.Oblique,
            }, // Normal font style
            foregroundColor: this.CanvasKit.Color4f(0, 0, 0, alpha), // Black foreground color
            heightMultiplier: 1.5, // Default height multiplier
            halfLeading: false, // Default half leading
            letterSpacing: 0.0, // Default letter spacing
            locale: 'en', // Default locale
            shadows: [
                {
                    color: [0, 0, 0, 0.5 * alpha],
                    blurRadius: 5,
                    offset: [2, 2]
                },
                {
                    color: this.CanvasKit.Color4f(1, 1, 1, alpha), // Border color (white)
                    offset: [1, -1], // Offset
                    blurRadius: 0, // Blur radius
                },
                {
                    color: this.CanvasKit.Color4f(1, 1, 1, alpha), // Border color (white)
                    offset: [-1, -1],
                    blurRadius: 0,
                },
                {
                    color: this.CanvasKit.Color4f(1, 1, 1, alpha), // Border color (white)
                    offset: [1, 1],
                    blurRadius: 0,
                },
                {
                    color: this.CanvasKit.Color4f(1, 1, 1, alpha), // Border color (white)
                    offset: [-1, 1],
                    blurRadius: 0,
                },
            ],
            textBaseline: this.CanvasKit.TextBaseline.Alphabetic, // Alphabetic text baseline
            wordSpacing: 0.0, // Default word spacing
        }, this.paint!, this.transparentPaint)
    }
}