"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const A = (a, b) => {
    return 1.0 - 3.0 * b + 3.0 * a;
};
const B = (a, b) => {
    return 3.0 * b - 6.0 * a;
};
const C = (a) => {
    return 3.0 * a;
};
const calcBezier = (a, b, c) => {
    return ((A(b, c) * a + B(b, c)) * a + C(b)) * a;
};
const getSlope = (a, b, c) => {
    return 3.0 * A(b, c) * a * a + 2.0 * B(b, c) * a + C(b);
};
const binarySubdivide = (a, b, c, d, e) => {
    let f, g, i = 0;
    do {
        g = b + (c - b) / 2.0;
        f = calcBezier(g, d, e) - a;
        if (f > 0.0) {
            c = g;
        }
        else {
            b = g;
        }
    } while (Math.abs(f) > 0.0000001 && ++i < 10);
    return g;
};
const newtonRaphsonIterate = (a, b, c, d) => {
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
const getTForX = (a, props) => {
    let b = 0.0, c = 1, d = props.kSplineTableSize - 1;
    for (; c !== d && props.sampleValues[c] <= a; ++c) {
        b += props.kSampleStepSize;
    }
    --c;
    let e = (a - props.sampleValues[c]) / (props.sampleValues[c + 1] - props.sampleValues[c]), f = b + e * props.kSampleStepSize, g = getSlope(f, props.x1, props.x2);
    if (g >= 0.001) {
        return newtonRaphsonIterate(a, f, props.x1, props.x2);
    }
    else if (g === 0.0) {
        return f;
    }
    else {
        return binarySubdivide(a, b, b + props.kSampleStepSize, props.x1, props.x2);
    }
};
const elastic = (x) => {
    return x * (33 * x * x * x * x - 106 * x * x * x + 126 * x * x - 67 * x + 15);
};
const easeInElastic = (x) => {
    const c4 = (2 * Math.PI) / 3;
    return x === 0 ? 0 : x === 1 ? 1 : -Math.pow(2, 10 * x - 10) * Math.sin((x * 10 - 10.75) * c4);
};
const easeInOutElastic = (x) => {
    const c5 = (2 * Math.PI) / 4.5;
    return x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ? -(Math.pow(2, 20 * x - 10) * Math.sin((20 * x - 11.125) * c5)) / 2 : (Math.pow(2, -20 * x + 10) * Math.sin((20 * x - 11.125) * c5)) / 2 + 1;
};
const easeOutElastic = (x) => {
    const c4 = (2 * Math.PI) / 3;
    return x === 0 ? 0 : x === 1 ? 1 : Math.pow(2, -10 * x) * Math.sin((x * 10 - 0.75) * c4) + 1;
};
const easeOutBounce = (x) => {
    const n1 = 7.5625;
    const d1 = 2.75;
    return x < 1 / d1 ? n1 * x * x : x < 2 / d1 ? n1 * (x -= 1.5 / d1) * x + 0.75 : x < 2.5 / d1 ? n1 * (x -= 2.25 / d1) * x + 0.9375 : n1 * (x -= 2.625 / d1) * x + 0.984375;
};
const easeInBounce = (x) => {
    return 1 - easeOutBounce(1 - x);
};
const easeInOutBounce = (x) => {
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
class BezierEasing {
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
    constructor(x1, y1, x2, y2) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.kSplineTableSize = 11;
        this.kSampleStepSize = 1.0 / (this.kSplineTableSize - 1.0);
        this.sampleValues = typeof Float32Array === "function" ? new Float32Array(this.kSplineTableSize) : new Array(this.kSplineTableSize);
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
    to(t) {
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
    static linear(t) {
        return t;
    }
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
     *
     * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static elastic(t) {
        return elastic(t);
    }
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
     *
     * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static ease(t) {
        return new BezierEasing(0.25, 0.1, 0.25, 1.0).to(t);
    }
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
     *
     * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static easeIn(t) {
        return new BezierEasing(0.42, 0.0, 1.0, 1.0).to(t);
    }
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
     *
     * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static easeInElastic(t) {
        return easeInElastic(t);
    }
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
     *
     * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static easeInBounce(t) {
        return easeInBounce(t);
    }
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
     *
     * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static easeInExpo(t) {
        return new BezierEasing(0.95, 0.05, 0.795, 0.035).to(t);
    }
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
     *
     * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static easeInSine(t) {
        return new BezierEasing(0.47, 0, 0.75, 0.72).to(t);
    }
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
     *
     * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static easeInQuad(t) {
        return new BezierEasing(0.55, 0.09, 0.68, 0.53).to(t);
    }
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
     *
     * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static easeInCubic(t) {
        return new BezierEasing(0.55, 0.06, 0.68, 0.19).to(t);
    }
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
     *
     * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static easeInBack(t) {
        return new BezierEasing(0.6, -0.28, 0.74, 0.05).to(t);
    }
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
     *
     * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static easeInQuart(t) {
        return new BezierEasing(0.895, 0.03, 0.685, 0.22).to(t);
    }
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
     *
     * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static easeInQuint(t) {
        return new BezierEasing(0.755, 0.05, 0.855, 0.06).to(t);
    }
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
     *
     * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static easeInCirc(t) {
        return new BezierEasing(0.6, 0.04, 0.98, 0.335).to(t);
    }
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
     *
     * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static easeInOut(t) {
        return new BezierEasing(0.42, 0.0, 0.58, 1.0).to(t);
    }
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
     *
     * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static easeInOutElastic(t) {
        return easeInOutElastic(t);
    }
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
     *
     * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static easeInOutBounce(t) {
        return easeInOutBounce(t);
    }
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
     *
     * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static easeInOutSine(t) {
        return new BezierEasing(0.45, 0.05, 0.55, 0.95).to(t);
    }
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
     *
     * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static easeInOutQuad(t) {
        return new BezierEasing(0.46, 0.03, 0.52, 0.96).to(t);
    }
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
     *
     * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static easeInOutCubic(t) {
        return new BezierEasing(0.65, 0.05, 0.36, 1).to(t);
    }
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
     *
     * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static easeInOutBack(t) {
        return new BezierEasing(0.68, -0.55, 0.27, 1.55).to(t);
    }
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
     *
     * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static easeInOutQuart(t) {
        return new BezierEasing(0.77, 0, 0.175, 1).to(t);
    }
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
     *
     * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static easeInOutQuint(t) {
        return new BezierEasing(0.86, 0, 0.07, 1).to(t);
    }
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
     *
     * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static easeInOutExpo(t) {
        return new BezierEasing(1, 0, 0, 1).to(t);
    }
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
     *
     * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static easeInOutCirc(t) {
        return new BezierEasing(0.785, 0.135, 0.15, 0.86).to(t);
    }
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
     *
     * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static easeOut(t) {
        return new BezierEasing(0.0, 0.0, 0.58, 1.0).to(t);
    }
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
     *
     * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static easeOutElastic(t) {
        return easeOutElastic(t);
    }
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
     *
     * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static easeOutBounce(t) {
        return easeOutBounce(t);
    }
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
     *
     * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static easeOutSine(t) {
        return new BezierEasing(0.39, 0.58, 0.57, 1).to(t);
    }
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
     *
     * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static easeOutQuad(t) {
        return new BezierEasing(0.25, 0.46, 0.45, 0.94).to(t);
    }
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
     *
     * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static easeOutCubic(t) {
        return new BezierEasing(0.22, 0.61, 0.36, 1).to(t);
    }
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
     *
     * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static easeOutBack(t) {
        return new BezierEasing(0.18, 0.89, 0.32, 1.28).to(t);
    }
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
     *
     * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static easeOutQuart(t) {
        return new BezierEasing(0.165, 0.84, 0.44, 1).to(t);
    }
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
     *
     * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static easeOutQuint(t) {
        return new BezierEasing(0.23, 1, 0.32, 1).to(t);
    }
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
     *
     * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static easeOutExpo(t) {
        return new BezierEasing(0.19, 1, 0.22, 1).to(t);
    }
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
     *
     * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static easeOutCirc(t) {
        return new BezierEasing(0.075, 0.82, 0.165, 1).to(t);
    }
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
     *
     * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static fastOutSlowIn(t) {
        return new BezierEasing(0.4, 0, 0.2, 1).to(t);
    }
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
     *
     * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static fastOutLinearIn(t) {
        return new BezierEasing(0.4, 0, 1, 1).to(t);
    }
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
     *
     * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static linearOutSlowIn(t) {
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
    static setInterval(func, delay = 1, duration = 1000, easing = "linear") {
        let elapsed = 0;
        let timerDelay, start = Date.now();
        const loop = async () => {
            var _a;
            if (elapsed > duration) {
                clearTimeout(timerDelay);
                return;
            }
            const t = Math.min(1, elapsed / duration);
            if (easing instanceof BezierEasing) {
                await func(easing.to(t));
            }
            else if (typeof easing === "function") {
                await func((_a = easing(t)) !== null && _a !== void 0 ? _a : 1);
            }
            else {
                await func(BezierEasing[easing](t));
            }
            elapsed = Date.now() - start;
            timerDelay = setTimeout(loop, delay - (elapsed % delay));
        };
        loop();
        return timerDelay;
    }
}
exports.default = BezierEasing;
//# sourceMappingURL=BezierEasing.js.map