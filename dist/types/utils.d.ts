interface TypedArrayLike {
    byteLength: number;
    buffer: ArrayBuffer;
    [index: number]: number;
}
type TypedArray = Uint8Array | Uint16Array | Uint32Array;
export declare const asyncForEach: <element = any>(array: element[], callback: (element: element, index: number, array: element[]) => Promise<any> | any) => Promise<void>;
export declare function uuidv4(): string;
export declare function contains<T extends object>(obj: T, key: string): boolean;
export declare function safeGet<T extends object, K extends keyof T>(obj: T, key: K): T[K] | undefined;
/**
 * Deep equal two objects. Support Arrays and Objects.
 */
export declare function deepEqual(a: object, b: object): boolean;
export declare function getGlobalObject(): typeof globalThis;
export declare function defer(fn: (...args: any[]) => any): void;
/**
 * Converts a string to a utf-8 encoded Uint8Array
 */
export declare function encodeString(str: string): Uint8Array;
/**
 * Converts a utf-8 encoded buffer to string
 */
export declare function decodeString(buffer: TypedArrayLike | TypedArray | number[]): string;
export declare function numberToBytes(number: number): number[];
export declare function bytesToNumber(bytes: TypedArrayLike | TypedArray | number[]): number;
export {};
//# sourceMappingURL=utils.d.ts.map