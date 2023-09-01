const A = (a: number, b: number): number => {
	return 1.0 - 3.0 * b + 3.0 * a;
};

const B = (a: number, b: number): number => {
	return 3.0 * b - 6.0 * a;
};

const C = (a: number): number => {
	return 3.0 * a;
};

const calcBezier = (a: number, b: number, c: number): number => {
	return ((A(b, c) * a + B(b, c)) * a + C(b)) * a;
};

const getSlope = (a: number, b: number, c: number): number => {
	return 3.0 * A(b, c) * a * a + 2.0 * B(b, c) * a + C(b);
};

const binarySubdivide = (a: number, b: number, c: number, d: number, e: number): number => {
	let f: number,
		g: number,
		i = 0;
	do {
		g = b + (c - b) / 2.0;
		f = calcBezier(g, d, e) - a;
		if (f > 0.0) {
			c = g;
		} else {
			b = g;
		}
	} while (Math.abs(f) > 0.0000001 && ++i < 10);
	return g;
};

const newtonRaphsonIterate = (a: number, b: number, c: number, d: number): number => {
	for (let i = 0; i < 4; ++i) {
		let currentSlope = getSlope(b, c, d);
		if (currentSlope === 0.0) {
			return b;
		}
		let currentX = calcBezier(b, c, d) - a;
		b -= currentX / currentSlope;
	}
	return b;
};

const getTForX = (a: number, props: { x1: number; y1: number; x2: number; y2: number; kSplineTableSize: number; kSampleStepSize: number; sampleValues: any[] | Float32Array }): number => {
	let b = 0.0,
		c = 1,
		d = props.kSplineTableSize - 1;
	for (; c !== d && props.sampleValues[c] <= a; ++c) {
		b += props.kSampleStepSize;
	}
	--c;
	let e = (a - props.sampleValues[c]) / (props.sampleValues[c + 1] - props.sampleValues[c]),
		f = b + e * props.kSampleStepSize,
		g = getSlope(f, props.x1, props.x2);
	if (g >= 0.001) {
		return newtonRaphsonIterate(a, f, props.x1, props.x2);
	} else if (g === 0.0) {
		return f;
	} else {
		return binarySubdivide(a, b, b + props.kSampleStepSize, props.x1, props.x2);
	}
};

const elastic = (x: number): number => {
	return x * (33 * x * x * x * x - 106 * x * x * x + 126 * x * x - 67 * x + 15);
};

const easeInElastic = (x: number): number => {
	const c4 = (2 * Math.PI) / 3;
	return x === 0 ? 0 : x === 1 ? 1 : -Math.pow(2, 10 * x - 10) * Math.sin((x * 10 - 10.75) * c4);
};

const easeInOutElastic = (x: number): number => {
	const c5 = (2 * Math.PI) / 4.5;
	return x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ? -(Math.pow(2, 20 * x - 10) * Math.sin((20 * x - 11.125) * c5)) / 2 : (Math.pow(2, -20 * x + 10) * Math.sin((20 * x - 11.125) * c5)) / 2 + 1;
};

const easeOutElastic = (x: number): number => {
	const c4 = (2 * Math.PI) / 3;
	return x === 0 ? 0 : x === 1 ? 1 : Math.pow(2, -10 * x) * Math.sin((x * 10 - 0.75) * c4) + 1;
};

const easeOutBounce = (x: number): number => {
	const n1 = 7.5625;
	const d1 = 2.75;
	return x < 1 / d1 ? n1 * x * x : x < 2 / d1 ? n1 * (x -= 1.5 / d1) * x + 0.75 : x < 2.5 / d1 ? n1 * (x -= 2.25 / d1) * x + 0.9375 : n1 * (x -= 2.625 / d1) * x + 0.984375;
};

const easeInBounce = (x: number): number => {
	return 1 - easeOutBounce(1 - x);
};

const easeInOutBounce = (x: number): number => {
	return x < 0.5 ? (1 - easeOutBounce(1 - 2 * x)) / 2 : (1 + easeOutBounce(2 * x - 1)) / 2;
};

// Define um objeto que mapeia os nomes das animações para suas formas em camelCase
const easingList = {
	"linear": "linear",
	"elastic": "elastic",
	"ease": "ease",
	"ease-in": "easeIn",
	"ease-in-elastic": "easeInElastic",
	"ease-in-bounce": "easeInBounce",
	"ease-in-expo": "easeInExpo",
	"ease-in-sine": "easeInSine",
	"ease-in-quad": "easeInQuad",
	"ease-in-cubic": "easeInCubic",
	"ease-in-back": "easeInBack",
	"ease-in-quart": "easeInQuart",
	"ease-in-quint": "easeInQuint",
	"ease-in-circ": "easeInCirc",
	"ease-in-out": "easeInOut",
	"ease-in-out-elastic": "easeInOutElastic",
	"ease-in-out-bounce": "easeInOutBounce",
	"ease-in-out-sine": "easeInOutSine",
	"ease-in-out-quad": "easeInOutQuad",
	"ease-in-out-cubic": "easeInOutCubic",
	"ease-in-out-back": "easeInOutBack",
	"ease-in-out-quart": "easeInOutQuart",
	"ease-in-out-quint": "easeInOutQuint",
	"ease-in-out-expo": "easeInOutExpo",
	"ease-in-out-circ": "easeInOutCirc",
	"ease-out": "easeOut",
	"ease-out-elastic": "easeOutElastic",
	"ease-out-bounce": "easeOutBounce",
	"ease-out-sine": "easeOutSine",
	"ease-out-quad": "easeOutQuad",
	"ease-out-cubic": "easeOutCubic",
	"ease-out-back": "easeOutBack",
	"ease-out-quart": "easeOutQuart",
	"ease-out-quint": "easeOutQuint",
	"ease-out-expo": "easeOutExpo",
	"ease-out-circ": "easeOutCirc",
	"fast-out-slow-in": "fastOutSlowIn",
	"fast-out-linear-in": "fastOutLinearIn",
	"linear-out-slow-in": "linearOutSlowIn",
};

/**
 * Classe que implementa as funções de easing de Bezier
 */
export default class BezierEasing {
	private kSplineTableSize: number = 11;
	private kSampleStepSize: number = 1.0 / (this.kSplineTableSize - 1.0);
	private sampleValues: any[] | Float32Array = typeof Float32Array === "function" ? new Float32Array(this.kSplineTableSize) : new Array(this.kSplineTableSize);

	/**
	 * Cria uma nova instância de BezierEasing com os parâmetros de controle da curva de Bezier.
	 *
	 * @param {number} x1 - O valor x do primeiro ponto de controle (deve estar no intervalo [0, 1])
	 * @param {number} y1 - O valor y do primeiro ponto de controle
	 * @param {number} x2 - O valor x do segundo ponto de controle (deve estar no intervalo [0, 1])
	 * @param {number} y2 - O valor y do segundo ponto de controle
	 * @throws {Error} Se os valores x1 e x2 estiverem fora do intervalo [0, 1]
	 * @constructor
	 */
	constructor(private x1: number, private y1: number, private x2: number, private y2: number) {
		if (!(0 <= x1 && x1 <= 1 && 0 <= x2 && x2 <= 1)) {
			throw new Error("bezier x values must be in [0, 1] range");
		}

		for (let i = 0; i < this.kSplineTableSize; ++i) {
			this.sampleValues[i] = calcBezier(i * this.kSampleStepSize, x1, x2);
		}
	}

	/**
	 * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
	 *
	 * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
	 * @returns {number} - O valor interpolado correspondente à curva de Bezier
	 */
	to(t: number): number {
		if (this.x1 === this.y1 && this.x2 === this.y2) {
			return t;
		}

		const props = {
			x1: this.x1,
			y1: this.y1,
			x2: this.x2,
			y2: this.y2,
			kSplineTableSize: this.kSplineTableSize,
			kSampleStepSize: this.kSampleStepSize,
			sampleValues: this.sampleValues,
		};

		return t === 0 ? 0 : t === 1 ? 1 : calcBezier(getTForX(t, props), this.y1, this.y2);
	}

	/**
	 * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
	 *
	 * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
	 * @returns {number} - O valor interpolado correspondente à curva de Bezier
	 */
	static linear(t: number): number {
		return t;
	}

	/**
	 * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
	 *
	 * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
	 * @returns {number} - O valor interpolado correspondente à curva de Bezier
	 */
	static elastic(t: number): number {
		return elastic(t);
	}

	/**
	 * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
	 *
	 * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
	 * @returns {number} - O valor interpolado correspondente à curva de Bezier
	 */
	static ease(t: number): number {
		return new BezierEasing(0.25, 0.1, 0.25, 1.0).to(t);
	}

	/**
	 * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
	 *
	 * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
	 * @returns {number} - O valor interpolado correspondente à curva de Bezier
	 */
	static easeIn(t: number): number {
		return new BezierEasing(0.42, 0.0, 1.0, 1.0).to(t);
	}

	/**
	 * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
	 *
	 * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
	 * @returns {number} - O valor interpolado correspondente à curva de Bezier
	 */
	static easeInElastic(t: number): number {
		return easeInElastic(t);
	}

	/**
	 * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
	 *
	 * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
	 * @returns {number} - O valor interpolado correspondente à curva de Bezier
	 */
	static easeInBounce(t: number): number {
		return easeInBounce(t);
	}

	/**
	 * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
	 *
	 * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
	 * @returns {number} - O valor interpolado correspondente à curva de Bezier
	 */
	static easeInExpo(t: number): number {
		return new BezierEasing(0.95, 0.05, 0.795, 0.035).to(t);
	}

	/**
	 * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
	 *
	 * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
	 * @returns {number} - O valor interpolado correspondente à curva de Bezier
	 */
	static easeInSine(t: number): number {
		return new BezierEasing(0.47, 0, 0.75, 0.72).to(t);
	}

	/**
	 * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
	 *
	 * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
	 * @returns {number} - O valor interpolado correspondente à curva de Bezier
	 */
	static easeInQuad(t: number): number {
		return new BezierEasing(0.55, 0.09, 0.68, 0.53).to(t);
	}

	/**
	 * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
	 *
	 * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
	 * @returns {number} - O valor interpolado correspondente à curva de Bezier
	 */
	static easeInCubic(t: number): number {
		return new BezierEasing(0.55, 0.06, 0.68, 0.19).to(t);
	}

	/**
	 * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
	 *
	 * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
	 * @returns {number} - O valor interpolado correspondente à curva de Bezier
	 */
	static easeInBack(t: number): number {
		return new BezierEasing(0.6, -0.28, 0.74, 0.05).to(t);
	}

	/**
	 * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
	 *
	 * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
	 * @returns {number} - O valor interpolado correspondente à curva de Bezier
	 */
	static easeInQuart(t: number): number {
		return new BezierEasing(0.895, 0.03, 0.685, 0.22).to(t);
	}

	/**
	 * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
	 *
	 * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
	 * @returns {number} - O valor interpolado correspondente à curva de Bezier
	 */
	static easeInQuint(t: number): number {
		return new BezierEasing(0.755, 0.05, 0.855, 0.06).to(t);
	}

	/**
	 * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
	 *
	 * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
	 * @returns {number} - O valor interpolado correspondente à curva de Bezier
	 */
	static easeInCirc(t: number): number {
		return new BezierEasing(0.6, 0.04, 0.98, 0.335).to(t);
	}

	/**
	 * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
	 *
	 * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
	 * @returns {number} - O valor interpolado correspondente à curva de Bezier
	 */
	static easeInOut(t: number): number {
		return new BezierEasing(0.42, 0.0, 0.58, 1.0).to(t);
	}

	/**
	 * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
	 *
	 * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
	 * @returns {number} - O valor interpolado correspondente à curva de Bezier
	 */
	static easeInOutElastic(t: number): number {
		return easeInOutElastic(t);
	}

	/**
	 * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
	 *
	 * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
	 * @returns {number} - O valor interpolado correspondente à curva de Bezier
	 */
	static easeInOutBounce(t: number): number {
		return easeInOutBounce(t);
	}

	/**
	 * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
	 *
	 * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
	 * @returns {number} - O valor interpolado correspondente à curva de Bezier
	 */
	static easeInOutSine(t: number): number {
		return new BezierEasing(0.45, 0.05, 0.55, 0.95).to(t);
	}

	/**
	 * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
	 *
	 * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
	 * @returns {number} - O valor interpolado correspondente à curva de Bezier
	 */
	static easeInOutQuad(t: number): number {
		return new BezierEasing(0.46, 0.03, 0.52, 0.96).to(t);
	}

	/**
	 * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
	 *
	 * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
	 * @returns {number} - O valor interpolado correspondente à curva de Bezier
	 */
	static easeInOutCubic(t: number): number {
		return new BezierEasing(0.65, 0.05, 0.36, 1).to(t);
	}

	/**
	 * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
	 *
	 * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
	 * @returns {number} - O valor interpolado correspondente à curva de Bezier
	 */
	static easeInOutBack(t: number): number {
		return new BezierEasing(0.68, -0.55, 0.27, 1.55).to(t);
	}

	/**
	 * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
	 *
	 * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
	 * @returns {number} - O valor interpolado correspondente à curva de Bezier
	 */
	static easeInOutQuart(t: number): number {
		return new BezierEasing(0.77, 0, 0.175, 1).to(t);
	}

	/**
	 * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
	 *
	 * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
	 * @returns {number} - O valor interpolado correspondente à curva de Bezier
	 */
	static easeInOutQuint(t: number): number {
		return new BezierEasing(0.86, 0, 0.07, 1).to(t);
	}

	/**
	 * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
	 *
	 * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
	 * @returns {number} - O valor interpolado correspondente à curva de Bezier
	 */
	static easeInOutExpo(t: number): number {
		return new BezierEasing(1, 0, 0, 1).to(t);
	}

	/**
	 * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
	 *
	 * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
	 * @returns {number} - O valor interpolado correspondente à curva de Bezier
	 */
	static easeInOutCirc(t: number): number {
		return new BezierEasing(0.785, 0.135, 0.15, 0.86).to(t);
	}

	/**
	 * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
	 *
	 * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
	 * @returns {number} - O valor interpolado correspondente à curva de Bezier
	 */
	static easeOut(t: number): number {
		return new BezierEasing(0.0, 0.0, 0.58, 1.0).to(t);
	}

	/**
	 * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
	 *
	 * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
	 * @returns {number} - O valor interpolado correspondente à curva de Bezier
	 */
	static easeOutElastic(t: number): number {
		return easeOutElastic(t);
	}

	/**
	 * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
	 *
	 * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
	 * @returns {number} - O valor interpolado correspondente à curva de Bezier
	 */
	static easeOutBounce(t: number): number {
		return easeOutBounce(t);
	}

	/**
	 * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
	 *
	 * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
	 * @returns {number} - O valor interpolado correspondente à curva de Bezier
	 */
	static easeOutSine(t: number): number {
		return new BezierEasing(0.39, 0.58, 0.57, 1).to(t);
	}

	/**
	 * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
	 *
	 * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
	 * @returns {number} - O valor interpolado correspondente à curva de Bezier
	 */
	static easeOutQuad(t: number): number {
		return new BezierEasing(0.25, 0.46, 0.45, 0.94).to(t);
	}

	/**
	 * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
	 *
	 * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
	 * @returns {number} - O valor interpolado correspondente à curva de Bezier
	 */
	static easeOutCubic(t: number): number {
		return new BezierEasing(0.22, 0.61, 0.36, 1).to(t);
	}

	/**
	 * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
	 *
	 * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
	 * @returns {number} - O valor interpolado correspondente à curva de Bezier
	 */
	static easeOutBack(t: number): number {
		return new BezierEasing(0.18, 0.89, 0.32, 1.28).to(t);
	}

	/**
	 * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
	 *
	 * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
	 * @returns {number} - O valor interpolado correspondente à curva de Bezier
	 */
	static easeOutQuart(t: number): number {
		return new BezierEasing(0.165, 0.84, 0.44, 1).to(t);
	}

	/**
	 * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
	 *
	 * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
	 * @returns {number} - O valor interpolado correspondente à curva de Bezier
	 */
	static easeOutQuint(t: number): number {
		return new BezierEasing(0.23, 1, 0.32, 1).to(t);
	}

	/**
	 * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
	 *
	 * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
	 * @returns {number} - O valor interpolado correspondente à curva de Bezier
	 */
	static easeOutExpo(t: number): number {
		return new BezierEasing(0.19, 1, 0.22, 1).to(t);
	}

	/**
	 * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
	 *
	 * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
	 * @returns {number} - O valor interpolado correspondente à curva de Bezier
	 */
	static easeOutCirc(t: number): number {
		return new BezierEasing(0.075, 0.82, 0.165, 1).to(t);
	}

	/**
	 * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
	 *
	 * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
	 * @returns {number} - O valor interpolado correspondente à curva de Bezier
	 */
	static fastOutSlowIn(t: number): number {
		return new BezierEasing(0.4, 0, 0.2, 1).to(t);
	}

	/**
	 * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
	 *
	 * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
	 * @returns {number} - O valor interpolado correspondente à curva de Bezier
	 */
	static fastOutLinearIn(t: number): number {
		return new BezierEasing(0.4, 0, 1, 1).to(t);
	}

	/**
	 * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
	 *
	 * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
	 * @returns {number} - O valor interpolado correspondente à curva de Bezier
	 */
	static linearOutSlowIn(t: number): number {
		return new BezierEasing(0, 0, 0.2, 1).to(t);
	}

	/**
	 * Função personalizada para agendar uma animação
	 * @param {Function} func - A função a ser executada a cada quadro de animação
	 * @param {number} delay - Atraso inicial antes da animação começar
	 * @param {number} duration - Duração total da animação
	 * @param {BezierEasing | keyof typeof easingList} easing - Objeto BezierEasing ou nome de animação de easing
	 * @returns {number} - ID do temporizador para cancelar a animação
	 */
	static setInterval(
		func: (x: number) => any,
		delay: number = 1,
		duration: number = 1000,
		easing: BezierEasing | keyof typeof easingList | ((t: number) => number) = "linear",
	): NodeJS.Timeout | undefined {
		let elapsed = 0;

		let timerDelay: NodeJS.Timeout | undefined,
			start = Date.now();

		const loop = async () => {
			if (elapsed > duration) {
				clearTimeout(timerDelay);
				return;
			}

			const t = Math.min(1, elapsed / duration);

			if (easing instanceof BezierEasing) {
				await func(easing.to(t));
			} else if (typeof easing === "function") {
				await func(easing(t) ?? 1);
			} else {
				await func(BezierEasing[easing](t));
			}

			elapsed = Date.now() - start;
			timerDelay = setTimeout(loop, delay - (elapsed % delay));
		};

		loop();

		return timerDelay;
	}
}
