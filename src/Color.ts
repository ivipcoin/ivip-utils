export const colorNames = {
	aliceblue: "#f0f8ff",
	antiquewhite: "#faebd7",
	aqua: "#00ffff",
	aquamarine: "#7fffd4",
	azure: "#f0ffff",
	beige: "#f5f5dc",
	bisque: "#ffe4c4",
	black: "#000000",
	blanchedalmond: "#ffebcd",
	blue: "#0000ff",
	blueviolet: "#8a2be2",
	brown: "#a52a2a",
	burlywood: "#deb887",
	cadetblue: "#5f9ea0",
	chartreuse: "#7fff00",
	chocolate: "#d2691e",
	coral: "#ff7f50",
	cornflowerblue: "#6495ed",
	cornsilk: "#fff8dc",
	crimson: "#dc143c",
	cyan: "#00ffff",
	darkblue: "#00008b",
	darkcyan: "#008b8b",
	darkgoldenrod: "#b8860b",
	darkgray: "#a9a9a9",
	darkgreen: "#006400",
	darkgrey: "#a9a9a9",
	darkkhaki: "#bdb76b",
	darkmagenta: "#8b008b",
	darkolivegreen: "#556b2f",
	darkorange: "#ff8c00",
	darkorchid: "#9932cc",
	darkred: "#8b0000",
	darksalmon: "#e9967a",
	darkseagreen: "#8fbc8f",
	darkslateblue: "#483d8b",
	darkslategray: "#2f4f4f",
	darkslategrey: "#2f4f4f",
	darkturquoise: "#00ced1",
	darkviolet: "#9400d3",
	deeppink: "#ff1493",
	deepskyblue: "#00bfff",
	dimgray: "#696969",
	dimgrey: "#696969",
	dodgerblue: "#1e90ff",
	firebrick: "#b22222",
	floralwhite: "#fffaf0",
	forestgreen: "#228b22",
	fuchsia: "#ff00ff",
	gainsboro: "#dcdcdc",
	ghostwhite: "#f8f8ff",
	gold: "#ffd700",
	goldenrod: "#daa520",
	gray: "#808080",
	green: "#008000",
	greenyellow: "#adff2f",
	grey: "#808080",
	honeydew: "#f0fff0",
	hotpink: "#ff69b4",
	indianred: "#cd5c5c",
	indigo: "#4b0082",
	ivory: "#fffff0",
	khaki: "#f0e68c",
	lavender: "#e6e6fa",
	lavenderblush: "#fff0f5",
	lawngreen: "#7cfc00",
	lemonchiffon: "#fffacd",
	lightblue: "#add8e6",
	lightcoral: "#f08080",
	lightcyan: "#e0ffff",
	lightgoldenrodyellow: "#fafad2",
	lightgray: "#d3d3d3",
	lightgreen: "#90ee90",
	lightgrey: "#d3d3d3",
	lightpink: "#ffb6c1",
	lightsalmon: "#ffa07a",
	lightseagreen: "#20b2aa",
	lightskyblue: "#87cefa",
	lightslategray: "#778899",
	lightslategrey: "#778899",
	lightsteelblue: "#b0c4de",
	lightyellow: "#ffffe0",
	lime: "#00ff00",
	limegreen: "#32cd32",
	linen: "#faf0e6",
	magenta: "#ff00ff",
	maroon: "#800000",
	mediumaquamarine: "#66cdaa",
	mediumblue: "#0000cd",
	mediumorchid: "#ba55d3",
	mediumpurple: "#9370db",
	mediumseagreen: "#3cb371",
	mediumslateblue: "#7b68ee",
	mediumspringgreen: "#00fa9a",
	mediumturquoise: "#48d1cc",
	mediumvioletred: "#c71585",
	midnightblue: "#191970",
	mintcream: "#f5fffa",
	mistyrose: "#ffe4e1",
	moccasin: "#ffe4b5",
	navajowhite: "#ffdead",
	navy: "#000080",
	oldlace: "#fdf5e6",
	olive: "#808000",
	olivedrab: "#6b8e23",
	orange: "#ffa500",
	orangered: "#ff4500",
	orchid: "#da70d6",
	palegoldenrod: "#eee8aa",
	palegreen: "#98fb98",
	paleturquoise: "#afeeee",
	palevioletred: "#db7093",
	papayawhip: "#ffefd5",
	peachpuff: "#ffdab9",
	peru: "#cd853f",
	pink: "#ffc0cb",
	plum: "#dda0dd",
	powderblue: "#b0e0e6",
	purple: "#800080",
	red: "#ff0000",
	rosybrown: "#bc8f8f",
	royalblue: "#4169e1",
	saddlebrown: "#8b4513",
	salmon: "#fa8072",
	sandybrown: "#f4a460",
	seagreen: "#2e8b57",
	seashell: "#fff5ee",
	sienna: "#a0522d",
	silver: "#c0c0c0",
	skyblue: "#87ceeb",
	slateblue: "#6a5acd",
	slategray: "#708090",
	slategrey: "#708090",
	snow: "#fffafa",
	springgreen: "#00ff7f",
	steelblue: "#4682b4",
	tan: "#d2b48c",
	teal: "#008080",
	thistle: "#d8bfd8",
	tomato: "#ff6347",
	turquoise: "#40e0d0",
	violet: "#ee82ee",
	wheat: "#f5deb3",
	white: "#ffffff",
	whitesmoke: "#f5f5f5",
	yellow: "#ffff00",
	yellowgreen: "#9acd32",
};

const prependZeroIfNecessaryHelper = (a: string): string => {
	return 1 == a.length ? "0" + a : a;
};

export const hexToRgb = (a: string): [number, number, number] => {
	let b = parseInt(a.substring(1, 3), 16),
		c = parseInt(a.substring(3, 5), 16),
		d = parseInt(a.substring(5, 7), 16);
	return [b, c, d];
};

export const rgbToHex = (a: number, b: number, c: number): string => {
	if (isNaN(a) || 0 > a || 255 < a || isNaN(b) || 0 > b || 255 < b || isNaN(c) || 0 > c || 255 < c) {
		return "#000000";
	}
	return "#" + [prependZeroIfNecessaryHelper(a.toString(16)), prependZeroIfNecessaryHelper(b.toString(16)), prependZeroIfNecessaryHelper(c.toString(16))].join("");
};

export const rgbToHsl = (a: number, b: number, c: number): [number, number, number] => {
	a /= 255;
	b /= 255;
	c /= 255;
	let d = Math.max(a, b, c),
		e = Math.min(a, b, c),
		f = 0,
		g = 0,
		h = 0.5 * (d + e);

	if (d != e) {
		if (d == a) {
			f = (60 * (b - c)) / (d - e);
		} else if (d == b) {
			f = (60 * (c - a)) / (d - e) + 120;
		} else if (d == c) {
			f = (60 * (a - b)) / (d - e) + 240;
		}
	}

	g = 0 < h && 0.5 >= h ? (d - e) / (2 * h) : (d - e) / (2 - 2 * h);

	return [Math.round(f + 360) % 360, Math.round(g * 100), Math.round(h * 100)];
};

export const rgbToHsv = (a: number, b: number, c: number): [number, number, number] => {
	let d = Math.max(Math.max(a, b), c),
		e = Math.min(Math.min(a, b), c),
		f: number;
	if (e == d) {
		e = a = 0;
	} else {
		f = d - e;
		e = f / d;
		a = 60 * (a == d ? (b - c) / f : b == d ? 2 + (c - a) / f : 4 + (a - b) / f);
		if (0 > a) {
			a += 360;
		} else if (360 < a) {
			a -= 360;
		}
	}
	return [Math.round(a), Math.round(e * 100), Math.round((d * 100) / 255)];
};

export const rgbToCmyk = (a: number, b: number, c: number): [number, number, number, number] => {
	let d: number, e: number, f: number, g: number, h: number, i: number, j: number;
	if (a == 0 && b == 0 && c == 0) {
		d = e = f = 0;
		g = 1;
	} else {
		h = 1 - a / 255;
		i = 1 - b / 255;
		j = 1 - c / 255;
		g = Math.min(h, Math.min(i, j));
		d = (h - g) / (1 - g);
		e = (i - g) / (1 - g);
		f = (j - g) / (1 - g);
	}
	return [Math.round(d * 100), Math.round(e * 100), Math.round(f * 100), Math.round(g * 100)];
};

export const rgbToHwb = (a: number, b: number, c: number): [number, number, number] => {
	let d: number, e: number, f: number, g: number, h: number, i: number, j: number;
	h = rgbToHsv(a, b, c)[0];
	a /= 255;
	b /= 255;
	c /= 255;
	f = Math.min(a, b, c);
	g = Math.max(a, b, c);
	c = 1 - g;
	if (g === f) {
		/*h = 0;*/ i = Math.round(f * 100);
		j = Math.round(c * 100);
	} else {
		d = a === f ? b - c : b === f ? c - a : a - b;
		e = a === f ? 3 : b === f ? 5 : 1;
		h = Math.round((((e - d / (g - f)) / 6) * 100 * 360) / 100);
		if (0 > h) {
			h += 360;
		} else if (360 < h) {
			h -= 360;
		}
		i = Math.round(f * 100);
		j = Math.round(c * 100);
	}
	return [Math.round(h), Math.round(i), Math.round(j)];
};

const hueToRgb_ = (a: number, b: number, c: number): number => {
	0 > c ? (c += 1) : 1 < c && (c -= 1);
	return 1 > 6 * c ? a + 6 * (b - a) * c : 1 > 2 * c ? b : 2 > 3 * c ? a + (b - a) * (2 / 3 - c) * 6 : a;
};

export const hslToRgb = (a: number, b: number, c: number): [number, number, number] => {
	let d = 0,
		e = 0,
		f = 0,
		g: number;
	a /= 360;
	if (0 == b) {
		d = e = f = 255 * c;
	} else {
		g = f = 0;
		g = 0.5 > c ? c * (1 + b) : c + b - b * c;
		f = 2 * c - g;
		d = 255 * hueToRgb_(f, g, a + 1 / 3);
		e = 255 * hueToRgb_(f, g, a);
		f = 255 * hueToRgb_(f, g, a - 1 / 3);
	}
	return [Math.round(d), Math.round(e), Math.round(f)];
};

export const hsvToRgb = (a: number, b_: number, c: number): [number, number, number] => {
	let r: number, g: number, b: number, d: number, e: number, f: number, h: number, i: number, k: number, l: number, m: number;
	if (b_ == 0) {
		r = g = b = Math.round(c * 255);
	} else {
		h = a * 6 == 6 ? 0 : a * 6;
		i = Math.floor(h);
		k = c * (1 - b_);
		l = c * (1 - b_ * (h - i));
		m = c * (1 - b_ * (1 - (h - i)));
		if (i == 0) {
			d = c;
			e = m;
			f = k;
		} else if (i == 1) {
			d = l;
			e = c;
			f = k;
		} else if (i == 2) {
			d = k;
			e = c;
			f = m;
		} else if (i == 3) {
			d = k;
			e = l;
			f = c;
		} else if (i == 4) {
			d = m;
			e = k;
			f = c;
		} else {
			d = c;
			e = k;
			f = l;
		}
		r = Math.round(d * 255);
		g = Math.round(e * 255);
		b = Math.round(f * 255);
	}
	return [r, g, b];
};

export const cmykToRgb = (a: number, b: number, c: number, d: number): [number, number, number] => {
	let e = 255 * (1 - a) * (1 - d),
		f = 255 * (1 - b) * (1 - d),
		g = 255 * (1 - c) * (1 - d);
	return [Math.round(e), Math.round(f), Math.round(g)];
};

export const hwbToRgb = (a: number, b: number, c: number): [number, number, number] => {
	let d: number, e: number, f: number, g: number, h: number, i: number, j: number;
	a = a * 6;
	g = 1 - c;
	j = a | 0;
	i = a - j;
	if (j & 1) {
		i = 1 - i;
	}
	h = b + i * (g - b);
	g = (g * 255) | 0;
	h = (h * 255) | 0;
	b = (b * 255) | 0;
	if (j == 0) {
		d = g;
		e = h;
		f = b;
	} else if (j == 1) {
		d = h;
		e = g;
		f = b;
	} else if (j == 2) {
		d = b;
		e = g;
		f = h;
	} else if (j == 3) {
		d = b;
		e = h;
		f = g;
	} else if (j == 4) {
		d = h;
		e = b;
		f = g;
	} else if (j == 5) {
		d = g;
		e = b;
		f = h;
	} else {
		d = e = f = g;
	}
	return [Math.round(d), Math.round(e), Math.round(f)];
};

export const blend = (a: [number, number, number], b: [number, number, number], c: number): [number, number, number] => {
	c = Math.min(Math.max(c, 0), 1);
	return [Math.round(c * a[0] + (1 - c) * b[0]), Math.round(c * a[1] + (1 - c) * b[1]), Math.round(c * a[2] + (1 - c) * b[2])];
};

export const darken = (a: [number, number, number], b: number): [number, number, number] => {
	return blend([0, 0, 0], a, b);
};

export const lighten = (a: [number, number, number], b: number): [number, number, number] => {
	return blend([255, 255, 255], a, b);
};

export const grayScale = (a: [number, number, number]): [number, number, number] => {
	let b = Math.round((a[0] + a[1] + a[2]) / 3);
	return [b, b, b];
};

export const colorScale = (a: [number, number, number], b: [number, number, number], c: [number, number, number]): [number, number, number] => {
	let s = grayScale(a)[0];
	b = b == undefined ? [255, 255, 255] : b;
	c = c == undefined ? [0, 0, 0] : c;
	let d = (s * 100) / 255;
	return blend(b, c, d);
};

export const watershed = (a: [number, number, number]): [number, number, number] => {
	let b = grayScale(a),
		c = b[0],
		e = 255 / 2;
	if (c >= e) {
		return [255, 255, 255];
	} else {
		return [0, 0, 0];
	}
};

export const growing = (a: [number, number, number]): [number, number, number] => {
	let b = grayScale(a),
		c = b[0];
	return hslToRgb(Math.round((c * 360) / 255), 100 / 100, 50 / 100);
};

export const negative = (a: [number, number, number]): [number, number, number] => {
	return [Math.round(255 - a[0]), Math.round(255 - a[1]), Math.round(255 - a[2])];
};

export const hslDistance = (a: [number, number, number], b: [number, number, number]): number => {
	a = [a[0], a[1] / 100, a[2] / 100];
	b = [b[0], b[1] / 100, b[2] / 100];
	let c: number, d: number;
	c = 0.5 >= a[2] ? a[1] * a[2] : a[1] * (1 - a[2]);
	d = 0.5 >= b[2] ? b[1] * b[2] : b[1] * (1 - b[2]);
	return Math.round(((a[2] - b[2]) * (a[2] - b[2]) + c * c + d * d - 2 * c * d * Math.cos(2 * (a[0] / 360 - b[0] / 360) * Math.PI)) * 100);
};

type ColorType = "hex" | "name" | "rgb" | "hsl" | "hsv" | "cmyk" | "hwb" | "rgba" | "hsla" | "hsva" | "cmyka" | "hwba" | undefined;

interface InfoColor {
	type: ColorType;
	string: string | undefined;
	array: number[] | undefined;
}

export const infoColor = (color: string): InfoColor => {
	let result: InfoColor = { type: undefined, string: undefined, array: undefined },
		b: any,
		c: any,
		d: any,
		e: any;
	if ((b = /^((?:rgb|hs[lv]|cmyk|hwb)a?)\s*\(([^\)]*)\)/.exec(String(color)))) {
		c = b[1];
		d = c.replace(/a$/, "");
		e = d === "cmyk" ? 4 : 3;
		b[2] = b[2]
			.replace(/^\s+|\s+$/g, "")
			.split(/\s*,\s*/)
			.map((x, i) => {
				if (/%$/.test(x) && i === e) {
					return parseFloat(x) / 100;
				} else if (/%$/.test(x)) {
					return parseFloat(x);
				}
				return parseFloat(x);
			});
		result.type = d;
		result.string = color;
		result.array = b[2];
	} else if (/^#[A-Fa-f0-9]+$/.test(color)) {
		result.type = "hex";
		result.string = color;
		result.array = hexToRgb(color);
	} else if (Object.keys(colorNames).includes(String(color).toLowerCase())) {
		result.type = "name";
		result.string = color;
		result.array = hexToRgb(colorNames[color]);
	}
	return result;
};

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
	private info: InfoColor;
	readonly props: PropsColor;
	readonly type: ColorType;
	private value: string = "#000000";

	constructor(color: string | number[] = "#000000") {
		this.value = Array.isArray(color) ? rgbToHex.apply(null, color as [number, number, number]) : color;
		this.info = infoColor(this.value);
		this.type = this.info.type;

		const defaultProps: PropsColor = {
			rgb: [0, 0, 0],
			string: "#000000",
			hex: "#000000",
			hsl: [0, 0, 0],
			hsv: [0, 0, 0],
			cmyk: [0, 0, 0, 0],
			hwb: [0, 0, 0],
		};

		if (Array.isArray(this.info.array)) {
			switch (this.type) {
				case "name":
					this.props = Color.colorName(this.value);
					break;
				case "hex":
					this.props = Color.hex(this.value);
					break;
				case "rgb":
					this.props = Color.rgb.apply(null, this.info.array as any);
					break;
				case "hsl":
					this.props = Color.hsl.apply(null, this.info.array as any);
					break;
				case "cmyk":
					this.props = Color.cmyk.apply(null, this.info.array as any);
					break;
				case "hwb":
					this.props = Color.hwb.apply(null, this.info.array as any);
					break;
				case "hsv":
					this.props = Color.hsv.apply(null, this.info.array as any);
					break;
				default:
					this.props = defaultProps;
			}
		} else {
			this.props = defaultProps;
		}
	}

	get isValidColor(): boolean {
		return Color.isColor(this.value);
	}

	get hex(): string {
		return this.props.hex;
	}

	get rgb(): string {
		return "rgb(" + this.props.rgb.join(", ") + ")";
	}

	get hsl(): string {
		return "hsl(" + this.props.hsl.map((v, i) => v + (i > 0 ? "%" : "")).join(", ") + ")";
	}

	get hsv(): string {
		return "hsv(" + this.props.hsv.map((v, i) => v + (i > 0 ? "%" : "")).join(", ") + ")";
	}

	get cmyk(): string {
		return "cmyk(" + this.props.cmyk.join("%, ") + ")";
	}

	get hwb(): string {
		return "hwb(" + this.props.hsv.map((v, i) => v + (i > 0 ? "%" : "")).join(", ") + ")";
	}

	get string(): string {
		return this.props.string;
	}

	get vector(): [number, number, number] {
		return infoColor(this.rgb).array as [number, number, number];
	}

	distance(a: string) {
		return hslDistance(this.props.hsl, new Color(a).props.hsl);
	}

	blend(a: string, b: number): Color {
		const c = blend(this.props.rgb, new Color(a).props.rgb, b);
		return new Color("rgb(" + c.join(", ") + ")");
	}

	static blend(a: string, b: string, c: number): Color {
		return new Color(a).blend(b, c);
	}

	darken(a: number): Color {
		let b = darken(this.props.rgb, a);
		return new Color("rgb(" + b.join(", ") + ")");
	}

	lighten(a: number): Color {
		let b = lighten(this.props.rgb, a);
		return new Color("rgb(" + b.join(", ") + ")");
	}

	grayScale(): Color {
		let b = grayScale(this.props.rgb);
		return new Color("rgb(" + b.join(", ") + ")");
	}

	colorScale(a: string, b: string): Color {
		const c = colorScale(this.props.rgb, new Color(a == undefined ? "#ffffff" : a).props.rgb, new Color(b == undefined ? "#000000" : b).props.rgb);
		return new Color("rgb(" + c.join(", ") + ")");
	}

	watershed(): Color {
		let b = watershed(this.props.rgb);
		return new Color("rgb(" + b.join(", ") + ")");
	}

	growing(): Color {
		let b = growing(this.props.rgb);
		return new Color("rgb(" + b.join(", ") + ")");
	}

	negative(): Color {
		let b = negative(this.props.rgb);
		return new Color("rgb(" + b.join(", ") + ")");
	}

	static isColor(color: string): boolean {
		try {
			let b = infoColor(color);
			if (["hex", "name", "rgb", "hsl", "hsv", "cmyk", "hwb", "rgba", "hsla", "hsva", "cmyka", "hwba"].includes(b.type ?? "")) {
				return true;
			}
		} catch (e) {
			return false;
		}
		return false;
	}

	static colorName(color: string): PropsColor {
		const hex = colorNames[color];
		let result: PropsColor = Color.hex(hex);
		result.string = String(color).toLowerCase();
		return result;
	}

	static hex(hex: string): PropsColor {
		hex = String(hex);
		hex = "#" == hex.charAt(0) ? hex : "#" + hex;
		let hexTripletRe_ = /#(.)(.)(.)/,
			validHexColorRe_ = /^#(?:[0-9a-f]{3}){1,2}$/i,
			isValid = function (a: string): boolean {
				return validHexColorRe_.test(a);
			},
			normalizeHex = (a: string): string => {
				if (!isValid(a)) a = "#000000";
				4 == a.length && (a = a.replace(hexTripletRe_, "#$1$1$2$2$3$3"));
				return a.toLowerCase();
			};

		hex = normalizeHex(hex);

		let result: PropsColor = Color.rgb.apply(null, hexToRgb(hex));
		result.string = hex;
		result.hex = hex;
		return result;
	}

	static rgb(a: number, b: number, c: number): PropsColor {
		a = Math.round(Number(a));
		b = Math.round(Number(b));
		c = Math.round(Number(c));
		const rgb: [number, number, number] = [a, b, c];
		return {
			rgb,
			string: "rgb(" + rgb.join(", ") + ")",
			hex: rgbToHex(a, b, c),
			hsl: rgbToHsl(a, b, c),
			hsv: rgbToHsv(a, b, c),
			cmyk: rgbToCmyk(a, b, c),
			hwb: rgbToHwb(a, b, c),
		};
	}

	static hsl(a: number, b: number, c: number): PropsColor {
		a = Math.round(Number(a));
		b = Number(b) / 100;
		c = Number(c) / 100;

		const rgb = hslToRgb(a, b, c);

		let result: PropsColor = Color.rgb.apply(null, rgb);
		result.hsl = [Math.round(a), Math.round(b * 100), Math.round(c * 100)];
		result.string = "hsl(" + result.hsl.map((v, i) => v + (i > 0 ? "%" : "")).join(", ") + ")";
		return result;
	}

	static hsv(a: number, b: number, c: number): PropsColor {
		a = Math.round(Number(a));
		b = Number(b) / 100;
		c = Number(c) / 100;

		const rgb = hsvToRgb(a, b, c);

		let result: PropsColor = Color.rgb.apply(null, rgb);
		result.hsv = [Math.round(a), Math.round(b * 100), Math.round(c * 100)];
		result.string = "hsv(" + result.hsv.map((v, i) => v + (i > 0 ? "%" : "")).join(", ") + ")";
		return result;
	}

	static cmyk(a: number, b: number, c: number, d: number): PropsColor {
		a = Number(a) / 100;
		b = Number(b) / 100;
		c = Number(c) / 100;
		d = Number(d) / 100;

		const rgb = cmykToRgb(a, b, c, d);

		let result: PropsColor = Color.rgb.apply(null, rgb);
		result.cmyk = [Math.round(a * 100), Math.round(b * 100), Math.round(c * 100), Math.round(d * 100)];
		result.string = "cmyk(" + result.cmyk.join("%, ") + "%)";
		return result;
	}

	static hwb(a: number, b: number, c: number): PropsColor {
		a = Number(a) / 360;
		b = Number(b) / 100;
		c = Number(c) / 100;

		const rgb = hwbToRgb(a, b, c);

		let result: PropsColor = Color.rgb.apply(null, rgb);
		result.hwb = [Math.round(a * 360), Math.round(b * 100), Math.round(c * 100)];
		result.string = "hwb(" + result.hwb.map((v, i) => v + (i > 0 ? "%" : "")).join(", ") + ")";
		return result;
	}
}
