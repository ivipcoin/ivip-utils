import { isObject } from "./validation";

interface TypedArrayLike {
	byteLength: number;
	buffer: ArrayBuffer;
	[index: number]: number;
}

type TypedArray = Uint8Array | Uint16Array | Uint32Array;

export const asyncForEach = <element = any>(array: Array<element>, callback: (element: element, index: number, array: Array<element>) => Promise<any> | any): Promise<void> => {
	return new Promise(async (resolve, reject) => {
		try {
			for (let i = 0; i < array.length; i++) {
				await callback(array[i], i, array);
			}
			resolve();
		} catch (e) {
			reject(e);
		}
	});
};

export function uuidv4(): string {
	return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
		const r = (Math.random() * 16) | 0,
			v = c === "x" ? r : (r & 0x3) | 0x8;
		return v.toString(16);
	});
}

export function contains<T extends object>(obj: T, key: string): boolean {
	return Object.prototype.hasOwnProperty.call(obj, key);
}

export function safeGet<T extends object, K extends keyof T>(obj: T, key: K): T[K] | undefined {
	if (Object.prototype.hasOwnProperty.call(obj, key)) {
		return obj[key];
	} else {
		return undefined;
	}
}

/**
 * Deep equal two objects. Support Arrays and Objects.
 */
export function deepEqual(a: object, b: object): boolean {
	if (a === b) {
		return true;
	}

	const aKeys = Object.keys(a);
	const bKeys = Object.keys(b);
	for (const k of aKeys) {
		if (!bKeys.includes(k)) {
			return false;
		}

		const aProp = (a as Record<string, unknown>)[k];
		const bProp = (b as Record<string, unknown>)[k];
		if (isObject(aProp) && isObject(bProp)) {
			if (!deepEqual(aProp as object, bProp as object)) {
				return false;
			}
		} else if (aProp !== bProp) {
			return false;
		}
	}

	for (const k of bKeys) {
		if (!aKeys.includes(k)) {
			return false;
		}
	}
	return true;
}

export function getGlobalObject(): typeof globalThis {
	if (typeof globalThis !== "undefined") {
		return globalThis;
	}
	if (typeof self !== "undefined") {
		return self;
	}
	if (typeof window !== "undefined") {
		return window;
	}
	if (typeof global !== "undefined") {
		return global;
	}
	throw new Error("Unable to locate global object.");
}

export function defer(fn: (...args: any[]) => any) {
	process.nextTick(fn);
}

/**
 * Converts a string to a utf-8 encoded Uint8Array
 */
export function encodeString(str: string): Uint8Array {
	if (typeof TextEncoder !== "undefined") {
		// Modern browsers, Node.js v11.0.0+ (or v8.3.0+ with util.TextEncoder)
		const encoder = new TextEncoder();
		return encoder.encode(str);
	} else if (typeof Buffer === "function") {
		// Node.js
		const buf = Buffer.from(str, "utf-8");
		return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength);
	} else {
		// Older browsers. Manually encode
		const arr: number[] = [];
		for (let i = 0; i < str.length; i++) {
			let code = str.charCodeAt(i);
			if (code > 128) {
				// Attempt simple UTF-8 conversion. See https://en.wikipedia.org/wiki/UTF-8
				if ((code & 0xd800) === 0xd800) {
					// code starts with 1101 10...: this is a 2-part utf-16 char code
					const nextCode = str.charCodeAt(i + 1);
					if ((nextCode & 0xdc00) !== 0xdc00) {
						// next code must start with 1101 11...
						throw new Error("follow-up utf-16 character does not start with 0xDC00");
					}
					i++;
					const p1 = code & 0x3ff; // Only use last 10 bits
					const p2 = nextCode & 0x3ff;
					// Create code point from these 2: (see https://en.wikipedia.org/wiki/UTF-16)
					code = 0x10000 | (p1 << 10) | p2;
				}
				if (code < 2048) {
					// Use 2 bytes for 11 bit value, first byte starts with 110xxxxx (0xc0), 2nd byte with 10xxxxxx (0x80)
					const b1 = 0xc0 | ((code >> 6) & 0x1f); // 0xc0 = 11000000, 0x1f = 11111
					const b2 = 0x80 | (code & 0x3f); // 0x80 = 10000000, 0x3f = 111111
					arr.push(b1, b2);
				} else if (code < 65536) {
					// Use 3 bytes for 16-bit value, bits per byte: 4, 6, 6
					const b1 = 0xe0 | ((code >> 12) & 0xf); // 0xe0 = 11100000, 0xf = 1111
					const b2 = 0x80 | ((code >> 6) & 0x3f); // 0x80 = 10000000, 0x3f = 111111
					const b3 = 0x80 | (code & 0x3f);
					arr.push(b1, b2, b3);
				} else if (code < 2097152) {
					// Use 4 bytes for 21-bit value, bits per byte: 3, 6, 6, 6
					const b1 = 0xf0 | ((code >> 18) & 0x7); // 0xf0 = 11110000, 0x7 = 111
					const b2 = 0x80 | ((code >> 12) & 0x3f); // 0x80 = 10000000, 0x3f = 111111
					const b3 = 0x80 | ((code >> 6) & 0x3f); // 0x80 = 10000000, 0x3f = 111111
					const b4 = 0x80 | (code & 0x3f);
					arr.push(b1, b2, b3, b4);
				} else {
					throw new Error(`Cannot convert character ${str.charAt(i)} (code ${code}) to utf-8`);
				}
			} else {
				arr.push(code < 128 ? code : 63); // 63 = ?
			}
		}
		return new Uint8Array(arr);
	}
}

/**
 * Converts a utf-8 encoded buffer to string
 */
export function decodeString(buffer: TypedArrayLike | TypedArray | number[]): string {
	// ArrayBuffer|
	if (typeof TextDecoder !== "undefined") {
		// Modern browsers, Node.js v11.0.0+ (or v8.3.0+ with util.TextDecoder)
		const decoder = new TextDecoder();
		if (buffer instanceof Uint8Array) {
			return decoder.decode(buffer);
		}
		const buf = Uint8Array.from(buffer as TypedArray);
		return decoder.decode(buf);
	} else if (typeof Buffer === "function") {
		// Node.js (v10 and below)
		if (buffer instanceof Array) {
			buffer = Uint8Array.from(buffer); // convert to typed array
		}
		if (!(buffer instanceof Buffer) && "buffer" in buffer && buffer.buffer instanceof ArrayBuffer) {
			const typedArray = buffer as TypedArray;
			buffer = Buffer.from(typedArray.buffer, typedArray.byteOffset, typedArray.byteLength); // Convert typed array to node.js Buffer
		}
		if (!(buffer instanceof Buffer)) {
			throw new Error("Unsupported buffer argument");
		}
		return buffer.toString("utf-8");
	} else {
		// Older browsers. Manually decode!
		if (!(buffer instanceof Uint8Array) && "buffer" in buffer && buffer["buffer"] instanceof ArrayBuffer) {
			// Convert TypedArray to Uint8Array
			const typedArray = buffer as TypedArray;
			buffer = new Uint8Array(typedArray.buffer, typedArray.byteOffset, typedArray.byteLength);
		}
		if (buffer instanceof Buffer || buffer instanceof Array || buffer instanceof Uint8Array) {
			let str = "";
			for (let i = 0; i < (buffer as any).length; i++) {
				let code = buffer[i];
				if (code > 128) {
					// Decode Unicode character
					if ((code & 0xf0) === 0xf0) {
						// 4 byte char
						const b1 = code,
							b2 = buffer[i + 1],
							b3 = buffer[i + 2],
							b4 = buffer[i + 3];
						code = ((b1 & 0x7) << 18) | ((b2 & 0x3f) << 12) | ((b3 & 0x3f) << 6) | (b4 & 0x3f);
						i += 3;
					} else if ((code & 0xe0) === 0xe0) {
						// 3 byte char
						const b1 = code,
							b2 = buffer[i + 1],
							b3 = buffer[i + 2];
						code = ((b1 & 0xf) << 12) | ((b2 & 0x3f) << 6) | (b3 & 0x3f);
						i += 2;
					} else if ((code & 0xc0) === 0xc0) {
						// 2 byte char
						const b1 = code,
							b2 = buffer[i + 1];
						code = ((b1 & 0x1f) << 6) | (b2 & 0x3f);
						i++;
					} else {
						throw new Error("invalid utf-8 data");
					}
				}
				if (code >= 65536) {
					// Split into 2-part utf-16 char codes
					code ^= 0x10000;
					const p1 = 0xd800 | (code >> 10);
					const p2 = 0xdc00 | (code & 0x3ff);
					str += String.fromCharCode(p1);
					str += String.fromCharCode(p2);
				} else {
					str += String.fromCharCode(code);
				}
			}
			return str;
		} else {
			throw new Error("Unsupported buffer argument");
		}
	}
}

export function numberToBytes(number: number): number[] {
	const bytes = new Uint8Array(8);
	const view = new DataView(bytes.buffer);
	view.setFloat64(0, number);
	return new Array(...bytes);
}

export function bytesToNumber(bytes: TypedArrayLike | TypedArray | number[]): number {
	const length = Array.isArray(bytes) ? bytes.length : bytes.byteLength;
	if (length !== 8) {
		throw new TypeError("must be 8 bytes");
	}
	const bin = new Uint8Array(bytes as TypedArray);
	const view = new DataView(bin.buffer);
	const nr = view.getFloat64(0);
	return nr;
}

export function getAllUrlParams(url?: string): { [key: string]: any } {
	let queryString = url ? url.split("?")[1] : window.location.search.slice(1);
	let obj = {};

	if (queryString) {
		queryString = queryString.split("#")[0];
		let arr = queryString.split("&");

		for (let i = 0; i < arr.length; i++) {
			let a = arr[i].split("=");
			let paramName = a[0];
			let paramValue = typeof a[1] === "undefined" ? true : a[1];

			paramName = paramName.toLowerCase();
			if (typeof paramValue === "string") {
				paramValue = decodeURIComponent(paramValue).toLowerCase();
			}

			if (/\[(\d+)?\]$/.test(paramName)) {
				let key = paramName.replace(/\[(\d+)?\]/, "");
				if (!obj[key]) obj[key] = [];

				if (/\[\d+\]$/.test(paramName)) {
					let index = parseInt((/\[(\d+)\]/.exec(paramName) as RegExpExecArray)[1]);
					obj[key][index] = paramValue;
				} else {
					obj[key].push(paramValue);
				}
			} else {
				if (!obj[paramName]) {
					obj[paramName] = paramValue;
				} else if (obj[paramName] && typeof obj[paramName] === "string") {
					obj[paramName] = [obj[paramName]];
					obj[paramName].push(paramValue);
				} else {
					obj[paramName].push(paramValue);
				}
			}
		}
	}

	return obj;
}

export function objectToUrlParams(obj: { [key: string]: any }): string {
	return Object.keys(obj)
		.map((key) => {
			const value = obj[key];
			if (Array.isArray(value)) {
				return value.map((val) => `${encodeURIComponent(key)}[]=${encodeURIComponent(val)}`).join("&");
			}
			return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
		})
		.join("&");
}
