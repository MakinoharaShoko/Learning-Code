import {
    CanvasKit,
    Paint,
    ParagraphBuilder, Shader,
    Surface
} from "canvaskit-wasm";
import {skia} from "@/skia/skia";
import {redAlphaText} from "@/skia/strutil";

export class TextDrawer {
    private CanvasKit: CanvasKit
    private paraStyle;
    private transparentPaint: Paint | undefined
    private shader: Shader | undefined
    private paint: Paint | null | undefined
    private builder: ParagraphBuilder
    private canvas;
    private readonly fontMgr;
    private fontSize: number = 48;
    private currentAlphaf = 1;
    // 每次改变字体大小的时候，才需要重新设置 shader，此时打开 flag，在第一次 Layout 后测量并重设 Shader
    private setShaderFlag = false;

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
    }[], x = 0, y = 0) {
        this.resetBuilderOnlyAlpha(1)
        const reduTexts = redAlphaText(texts).filter(e => e.alpha > 0 && e.text !== '')
        for (const e of reduTexts) {
            if (e.alpha === 0) {
                continue;
            }
            if (this.currentAlphaf !== e.alpha) {
                this.currentAlphaf = e.alpha
                this.paint?.setAlphaf(e.alpha);
                this.resetBuilderStyle(e.alpha)
            }
            this.builder.addText(e.text)
        }
        this.drawText(x, y)
    }

    public drawText(x = 0, y = 0) {
        const paragraph = this.builder.build();
        paragraph.layout(1000); // width in pixels to use when wrapping text
        if (this.setShaderFlag) {
            const lineMetrics = paragraph.getLineMetrics();
            if (lineMetrics.length > 0) {
                const baseline = lineMetrics[0].baseline;
                this.setShader(baseline, this.fontSize, this.fontSize * 1.5, x, y)
                this.setShaderFlag = false;
            }
        }
        this.canvas.clear(this.CanvasKit.TRANSPARENT)
        this.canvas.drawParagraph(paragraph, x, y);
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
        if (this.builder) {
            this.builder.delete();
        }
        this.builder = this.CanvasKit.ParagraphBuilder.Make(this.paraStyle, this.fontMgr!);

        if (this.transparentPaint) {
            this.transparentPaint.delete();
        }
        this.transparentPaint = new this.CanvasKit.Paint();
        this.transparentPaint.setColor(this.CanvasKit.TRANSPARENT);
        this.transparentPaint.setStyle(this.CanvasKit.PaintStyle.Fill);
        if (this.paint) {
            this.paint.delete();
        }
        this.paint = new this.CanvasKit.Paint();
        this.paint.setStyle(this.CanvasKit.PaintStyle.Fill);
        this.paint.setAntiAlias(true);
        this.resetBuilderOnlyAlpha(1);
        this.setShader(fontSize, fontSize, fontSize * 1.5, 0, 0)
        this.setShaderFlag = true;
    }

    private setShader(baseline: number, fontSize: number, lineHeight: number, x: number, y: number) {
        if (this.shader) {
            this.shader.delete();
        }
        this.shader = this.CanvasKit.Shader.MakeLinearGradient(
            [x, y + baseline - fontSize], // 渐变的起点
            [x, y + baseline - fontSize + lineHeight], // 渐变的终点
            [this.CanvasKit.Color(46, 169, 223, 1), this.CanvasKit.Color(0, 92, 175, 1)], // 渐变的颜色
            [0, 1], // 颜色的位置
            this.CanvasKit.TileMode.Repeat,
        );
        // 创建一个使用该 Shader 的 Paint
        this.paint!.setShader(this.shader);
    }

    public resetBuilderOnlyAlpha(alpha: number) {
        this.builder.reset();
        this.paraStyle = new this.CanvasKit.ParagraphStyle({
            textStyle: {
                fontSize: this.fontSize,
            },
            textAlign: this.CanvasKit.TextAlign.Left,
        });
        if (this.builder) {
            this.builder.delete();
        }
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
        }, this.paint!, this.transparentPaint!)
    }
}