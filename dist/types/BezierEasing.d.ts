/// <reference types="node" />
declare const easingList: {
    linear: string;
    elastic: string;
    ease: string;
    "ease-in": string;
    "ease-in-elastic": string;
    "ease-in-bounce": string;
    "ease-in-expo": string;
    "ease-in-sine": string;
    "ease-in-quad": string;
    "ease-in-cubic": string;
    "ease-in-back": string;
    "ease-in-quart": string;
    "ease-in-quint": string;
    "ease-in-circ": string;
    "ease-in-out": string;
    "ease-in-out-elastic": string;
    "ease-in-out-bounce": string;
    "ease-in-out-sine": string;
    "ease-in-out-quad": string;
    "ease-in-out-cubic": string;
    "ease-in-out-back": string;
    "ease-in-out-quart": string;
    "ease-in-out-quint": string;
    "ease-in-out-expo": string;
    "ease-in-out-circ": string;
    "ease-out": string;
    "ease-out-elastic": string;
    "ease-out-bounce": string;
    "ease-out-sine": string;
    "ease-out-quad": string;
    "ease-out-cubic": string;
    "ease-out-back": string;
    "ease-out-quart": string;
    "ease-out-quint": string;
    "ease-out-expo": string;
    "ease-out-circ": string;
    "fast-out-slow-in": string;
    "fast-out-linear-in": string;
    "linear-out-slow-in": string;
};
/**
 * Classe que implementa as funções de easing de Bezier
 */
export default class BezierEasing {
    private x1;
    private y1;
    private x2;
    private y2;
    private kSplineTableSize;
    private kSampleStepSize;
    private sampleValues;
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
    constructor(x1: number, y1: number, x2: number, y2: number);
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
     *
     * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    to(t: number): number;
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
     *
     * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static linear(t: number): number;
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
     *
     * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static elastic(t: number): number;
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
     *
     * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static ease(t: number): number;
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
     *
     * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static easeIn(t: number): number;
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
     *
     * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static easeInElastic(t: number): number;
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
     *
     * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static easeInBounce(t: number): number;
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
     *
     * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static easeInExpo(t: number): number;
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
     *
     * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static easeInSine(t: number): number;
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
     *
     * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static easeInQuad(t: number): number;
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
     *
     * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static easeInCubic(t: number): number;
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
     *
     * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static easeInBack(t: number): number;
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
     *
     * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static easeInQuart(t: number): number;
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
     *
     * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static easeInQuint(t: number): number;
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
     *
     * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static easeInCirc(t: number): number;
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
     *
     * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static easeInOut(t: number): number;
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
     *
     * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static easeInOutElastic(t: number): number;
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
     *
     * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static easeInOutBounce(t: number): number;
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
     *
     * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static easeInOutSine(t: number): number;
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
     *
     * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static easeInOutQuad(t: number): number;
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
     *
     * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static easeInOutCubic(t: number): number;
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
     *
     * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static easeInOutBack(t: number): number;
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
     *
     * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static easeInOutQuart(t: number): number;
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
     *
     * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static easeInOutQuint(t: number): number;
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
     *
     * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static easeInOutExpo(t: number): number;
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
     *
     * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static easeInOutCirc(t: number): number;
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
     *
     * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static easeOut(t: number): number;
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
     *
     * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static easeOutElastic(t: number): number;
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
     *
     * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static easeOutBounce(t: number): number;
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
     *
     * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static easeOutSine(t: number): number;
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
     *
     * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static easeOutQuad(t: number): number;
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
     *
     * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static easeOutCubic(t: number): number;
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
     *
     * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static easeOutBack(t: number): number;
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
     *
     * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static easeOutQuart(t: number): number;
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
     *
     * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static easeOutQuint(t: number): number;
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
     *
     * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static easeOutExpo(t: number): number;
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
     *
     * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static easeOutCirc(t: number): number;
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
     *
     * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static fastOutSlowIn(t: number): number;
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
     *
     * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static fastOutLinearIn(t: number): number;
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor t fornecido.
     *
     * @param {number} t - O valor t para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static linearOutSlowIn(t: number): number;
    /**
     * Função personalizada para agendar uma animação
     * @param {Function} func - A função a ser executada a cada quadro de animação
     * @param {number} delay - Atraso inicial antes da animação começar
     * @param {number} duration - Duração total da animação
     * @param {BezierEasing | keyof typeof easingList} easing - Objeto BezierEasing ou nome de animação de easing
     * @returns {number} - ID do temporizador para cancelar a animação
     */
    static setInterval(func: (x: number) => any, delay?: number, duration?: number, easing?: BezierEasing | keyof typeof easingList | ((t: number) => number)): NodeJS.Timeout | undefined;
}
export {};
//# sourceMappingURL=BezierEasing.d.ts.map