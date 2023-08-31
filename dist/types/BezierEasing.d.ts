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
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor x fornecido.
     *
     * @param {number} x - O valor x para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    to(x: number): number;
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor x fornecido.
     *
     * @param {number} x - O valor x para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static linear(x: number): number;
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor x fornecido.
     *
     * @param {number} x - O valor x para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static elastic(x: number): number;
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor x fornecido.
     *
     * @param {number} x - O valor x para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static ease(x: number): number;
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor x fornecido.
     *
     * @param {number} x - O valor x para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static easeIn(x: number): number;
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor x fornecido.
     *
     * @param {number} x - O valor x para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static easeInElastic(x: number): number;
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor x fornecido.
     *
     * @param {number} x - O valor x para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static easeInBounce(x: number): number;
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor x fornecido.
     *
     * @param {number} x - O valor x para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static easeInExpo(x: number): number;
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor x fornecido.
     *
     * @param {number} x - O valor x para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static easeInSine(x: number): number;
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor x fornecido.
     *
     * @param {number} x - O valor x para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static easeInQuad(x: number): number;
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor x fornecido.
     *
     * @param {number} x - O valor x para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static easeInCubic(x: number): number;
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor x fornecido.
     *
     * @param {number} x - O valor x para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static easeInBack(x: number): number;
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor x fornecido.
     *
     * @param {number} x - O valor x para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static easeInQuart(x: number): number;
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor x fornecido.
     *
     * @param {number} x - O valor x para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static easeInQuint(x: number): number;
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor x fornecido.
     *
     * @param {number} x - O valor x para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static easeInCirc(x: number): number;
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor x fornecido.
     *
     * @param {number} x - O valor x para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static easeInOut(x: number): number;
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor x fornecido.
     *
     * @param {number} x - O valor x para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static easeInOutElastic(x: number): number;
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor x fornecido.
     *
     * @param {number} x - O valor x para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static easeInOutBounce(x: number): number;
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor x fornecido.
     *
     * @param {number} x - O valor x para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static easeInOutSine(x: number): number;
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor x fornecido.
     *
     * @param {number} x - O valor x para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static easeInOutQuad(x: number): number;
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor x fornecido.
     *
     * @param {number} x - O valor x para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static easeInOutCubic(x: number): number;
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor x fornecido.
     *
     * @param {number} x - O valor x para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static easeInOutBack(x: number): number;
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor x fornecido.
     *
     * @param {number} x - O valor x para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static easeInOutQuart(x: number): number;
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor x fornecido.
     *
     * @param {number} x - O valor x para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static easeInOutQuint(x: number): number;
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor x fornecido.
     *
     * @param {number} x - O valor x para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static easeInOutExpo(x: number): number;
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor x fornecido.
     *
     * @param {number} x - O valor x para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static easeInOutCirc(x: number): number;
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor x fornecido.
     *
     * @param {number} x - O valor x para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static easeOut(x: number): number;
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor x fornecido.
     *
     * @param {number} x - O valor x para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static easeOutElastic(x: number): number;
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor x fornecido.
     *
     * @param {number} x - O valor x para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static easeOutBounce(x: number): number;
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor x fornecido.
     *
     * @param {number} x - O valor x para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static easeOutSine(x: number): number;
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor x fornecido.
     *
     * @param {number} x - O valor x para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static easeOutQuad(x: number): number;
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor x fornecido.
     *
     * @param {number} x - O valor x para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static easeOutCubic(x: number): number;
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor x fornecido.
     *
     * @param {number} x - O valor x para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static easeOutBack(x: number): number;
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor x fornecido.
     *
     * @param {number} x - O valor x para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static easeOutQuart(x: number): number;
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor x fornecido.
     *
     * @param {number} x - O valor x para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static easeOutQuint(x: number): number;
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor x fornecido.
     *
     * @param {number} x - O valor x para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static easeOutExpo(x: number): number;
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor x fornecido.
     *
     * @param {number} x - O valor x para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static easeOutCirc(x: number): number;
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor x fornecido.
     *
     * @param {number} x - O valor x para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static fastOutSlowIn(x: number): number;
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor x fornecido.
     *
     * @param {number} x - O valor x para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static fastOutLinearIn(x: number): number;
    /**
     * Calcula e retorna o valor interpolado correspondente à curva de Bezier para o valor x fornecido.
     *
     * @param {number} x - O valor x para o qual a interpolação deve ser calculada (deve estar no intervalo [0, 1])
     * @returns {number} - O valor interpolado correspondente à curva de Bezier
     */
    static linearOutSlowIn(x: number): number;
    /**
     * Função personalizada para agendar uma animação
     * @param {Function} func - A função a ser executada a cada quadro de animação
     * @param {number} delay - Atraso inicial antes da animação começar
     * @param {number} duration - Duração total da animação
     * @param {BezierEasing | keyof typeof easingList} easing - Objeto BezierEasing ou nome de animação de easing
     * @returns {number} - ID do temporizador para cancelar a animação
     */
    static setInterval(func: (y: number) => any, delay?: number, duration?: number, easing?: BezierEasing | keyof typeof easingList): number | NodeJS.Timeout | undefined;
}
export {};
//# sourceMappingURL=BezierEasing.d.ts.map