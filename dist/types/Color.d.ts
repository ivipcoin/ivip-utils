export declare const colorNames: {
    aliceblue: string;
    antiquewhite: string;
    aqua: string;
    aquamarine: string;
    azure: string;
    beige: string;
    bisque: string;
    black: string;
    blanchedalmond: string;
    blue: string;
    blueviolet: string;
    brown: string;
    burlywood: string;
    cadetblue: string;
    chartreuse: string;
    chocolate: string;
    coral: string;
    cornflowerblue: string;
    cornsilk: string;
    crimson: string;
    cyan: string;
    darkblue: string;
    darkcyan: string;
    darkgoldenrod: string;
    darkgray: string;
    darkgreen: string;
    darkgrey: string;
    darkkhaki: string;
    darkmagenta: string;
    darkolivegreen: string;
    darkorange: string;
    darkorchid: string;
    darkred: string;
    darksalmon: string;
    darkseagreen: string;
    darkslateblue: string;
    darkslategray: string;
    darkslategrey: string;
    darkturquoise: string;
    darkviolet: string;
    deeppink: string;
    deepskyblue: string;
    dimgray: string;
    dimgrey: string;
    dodgerblue: string;
    firebrick: string;
    floralwhite: string;
    forestgreen: string;
    fuchsia: string;
    gainsboro: string;
    ghostwhite: string;
    gold: string;
    goldenrod: string;
    gray: string;
    green: string;
    greenyellow: string;
    grey: string;
    honeydew: string;
    hotpink: string;
    indianred: string;
    indigo: string;
    ivory: string;
    khaki: string;
    lavender: string;
    lavenderblush: string;
    lawngreen: string;
    lemonchiffon: string;
    lightblue: string;
    lightcoral: string;
    lightcyan: string;
    lightgoldenrodyellow: string;
    lightgray: string;
    lightgreen: string;
    lightgrey: string;
    lightpink: string;
    lightsalmon: string;
    lightseagreen: string;
    lightskyblue: string;
    lightslategray: string;
    lightslategrey: string;
    lightsteelblue: string;
    lightyellow: string;
    lime: string;
    limegreen: string;
    linen: string;
    magenta: string;
    maroon: string;
    mediumaquamarine: string;
    mediumblue: string;
    mediumorchid: string;
    mediumpurple: string;
    mediumseagreen: string;
    mediumslateblue: string;
    mediumspringgreen: string;
    mediumturquoise: string;
    mediumvioletred: string;
    midnightblue: string;
    mintcream: string;
    mistyrose: string;
    moccasin: string;
    navajowhite: string;
    navy: string;
    oldlace: string;
    olive: string;
    olivedrab: string;
    orange: string;
    orangered: string;
    orchid: string;
    palegoldenrod: string;
    palegreen: string;
    paleturquoise: string;
    palevioletred: string;
    papayawhip: string;
    peachpuff: string;
    peru: string;
    pink: string;
    plum: string;
    powderblue: string;
    purple: string;
    red: string;
    rosybrown: string;
    royalblue: string;
    saddlebrown: string;
    salmon: string;
    sandybrown: string;
    seagreen: string;
    seashell: string;
    sienna: string;
    silver: string;
    skyblue: string;
    slateblue: string;
    slategray: string;
    slategrey: string;
    snow: string;
    springgreen: string;
    steelblue: string;
    tan: string;
    teal: string;
    thistle: string;
    tomato: string;
    turquoise: string;
    violet: string;
    wheat: string;
    white: string;
    whitesmoke: string;
    yellow: string;
    yellowgreen: string;
};
export declare const hexToRgb: (a: string) => [number, number, number];
export declare const rgbToHex: (a: number, b: number, c: number) => string;
export declare const rgbToHsl: (a: number, b: number, c: number) => [number, number, number];
export declare const rgbToHsv: (a: number, b: number, c: number) => [number, number, number];
export declare const rgbToCmyk: (a: number, b: number, c: number) => [number, number, number, number];
export declare const rgbToHwb: (a: number, b: number, c: number) => [number, number, number];
export declare const hslToRgb: (a: number, b: number, c: number) => [number, number, number];
export declare const hsvToRgb: (a: number, b_: number, c: number) => [number, number, number];
export declare const cmykToRgb: (a: number, b: number, c: number, d: number) => [number, number, number];
export declare const hwbToRgb: (a: number, b: number, c: number) => [number, number, number];
export declare const blend: (a: [number, number, number], b: [number, number, number], c: number) => [number, number, number];
export declare const darken: (a: [number, number, number], b: number) => [number, number, number];
export declare const lighten: (a: [number, number, number], b: number) => [number, number, number];
export declare const grayScale: (a: [number, number, number]) => [number, number, number];
export declare const colorScale: (a: [number, number, number], b: [number, number, number], c: [number, number, number]) => [number, number, number];
export declare const watershed: (a: [number, number, number]) => [number, number, number];
export declare const growing: (a: [number, number, number]) => [number, number, number];
export declare const negative: (a: [number, number, number]) => [number, number, number];
export declare const hslDistance: (a: [number, number, number], b: [number, number, number]) => number;
type ColorType = "hex" | "name" | "rgb" | "hsl" | "hsv" | "cmyk" | "hwb" | "rgba" | "hsla" | "hsva" | "cmyka" | "hwba" | undefined;
interface InfoColor {
    type: ColorType;
    string: string | undefined;
    array: number[] | undefined;
}
export declare const infoColor: (color: string) => InfoColor;
interface PropsColor {
    rgb: [number, number, number];
    string: string;
    hex: string;
    hsl: [number, number, number];
    hsv: [number, number, number];
    cmyk: [number, number, number, number];
    hwb: [number, number, number];
}
export default class Color {
    private info;
    readonly props: PropsColor;
    readonly type: ColorType;
    private value;
    constructor(color?: string | number[]);
    get isValidColor(): boolean;
    get hex(): string;
    get rgb(): string;
    get hsl(): string;
    get hsv(): string;
    get cmyk(): string;
    get hwb(): string;
    get string(): string;
    get vector(): [number, number, number];
    distance(a: string): number;
    blend(a: string, b: number): Color;
    static blend(a: string, b: string, c: number): Color;
    darken(a: number): Color;
    lighten(a: number): Color;
    grayScale(): Color;
    colorScale(a: string, b: string): Color;
    watershed(): Color;
    growing(): Color;
    negative(): Color;
    static isColor(color: string): boolean;
    static colorName(color: string): PropsColor;
    static hex(hex: string): PropsColor;
    static rgb(a: number, b: number, c: number): PropsColor;
    static hsl(a: number, b: number, c: number): PropsColor;
    static hsv(a: number, b: number, c: number): PropsColor;
    static cmyk(a: number, b: number, c: number, d: number): PropsColor;
    static hwb(a: number, b: number, c: number): PropsColor;
}
export {};
//# sourceMappingURL=Color.d.ts.map