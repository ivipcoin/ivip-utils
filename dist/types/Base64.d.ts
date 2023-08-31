export default class Base64 {
    private value;
    private keyStr;
    constructor(value: string);
    static utf8_encode(value: string): string;
    static utf8_decode(value: string): string;
    encode(): string;
    static encode(value: string): string;
    decode(): string;
    static decode(value: string): string;
}
//# sourceMappingURL=Base64.d.ts.map