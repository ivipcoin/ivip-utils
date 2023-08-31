export { default as JSONStringify } from "./JSONStringify";

export { default as mergeClasses } from "./mergeClasses";

export * from "./validation";

export * as gl from "./gl";

export { default as Base64 } from "./Base64";

export { default as BezierEasing } from "./BezierEasing";

export { default as Color } from "./Color";

export * as ColorUtils from "./Color";

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
