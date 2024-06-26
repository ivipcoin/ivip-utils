export const isArray = (value: any): value is Array<any> => {
	return Array.isArray(value) && typeof value === "object";
};

export const isTypedArray = (value: any): value is ArrayBuffer | Buffer | Uint8Array | Uint16Array | Uint32Array | Int8Array | Int16Array | Int32Array =>
	typeof value === "object" && ["ArrayBuffer", "Buffer", "Uint8Array", "Uint16Array", "Uint32Array", "Int8Array", "Int16Array", "Int32Array"].includes(value.constructor.name);

export const isObject = (value: any): value is Record<string, any> => {
	return typeof value === "object" && value !== null && !Array.isArray(value);
};

export const isJson = (value: any): boolean => {
	try {
		const result = JSON.parse(typeof value === "string" ? value : JSON.stringify(value));
		return isObject(result);
	} catch {
		return false;
	}
};

export const isString = (value: any): value is string => {
	return typeof value === "string";
};

export const isBoolean = (value: any): value is boolean => {
	return typeof value === "boolean";
};

export const isNumber = (value: any): value is number => {
	return typeof value === "number" && Number(value) === value;
};

export const isNumberValid = (value: any): boolean => {
	if (typeof value === "number") return true;
	if (typeof value !== "string") return false;
	const num = parseFloat(value);
	return !isNaN(num) && isFinite(num) && /^(\-)?\d+(\.\d+)?$/.test(value);
};

export const isInt = (value: any) => {
	return isNumber(value) && value % 1 === 0;
};

export const isFloat = (value: any) => {
	return isNumber(value) && value % 1 !== 0;
};

export const isNull = (value: any): value is null => {
	return value === null && typeof value === "object";
};

export const isNotNumber = (value: any): boolean => {
	return typeof value === "number" && isNaN(value);
};

export const isInfinity = (value: any): boolean => {
	return typeof value === "number" && !isFinite(value);
};

export const isDate = (value: any): value is Date => {
	return (
		value instanceof Date ||
		(typeof value === "object" && value !== null && typeof value.getMonth === "function") ||
		(typeof value === "string" && /^\d+$/.test(value) !== true && !isNaN(Date.parse(value)))
	);
};

export const isUndefined = (value: any): value is undefined => {
	return value === undefined && typeof value === "undefined";
};

export const isFunction = (value: any): value is Function => {
	return typeof value === "function";
};

export const isSymbol = (value: any): value is symbol => {
	return typeof value === "symbol";
};

export const isBuffer = (obj: any): boolean => {
	return obj != null && obj.constructor != null && typeof obj.constructor.isBuffer === "function" && obj.constructor.isBuffer(obj);
};

export const isEmailValid = (email: string): boolean => {
	if (typeof email !== "string") {
		return false;
	}
	const regex = /^\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b$/gi;
	return regex.test(email);
};

export const isPasswordValid = (password: string): boolean => {
	if (typeof password !== "string") {
		return false;
	}
	var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
	return regex.test(password);
};

export const isPhoneValid = (phone: string): boolean => {
	if (typeof phone !== "string") {
		return false;
	}
	var regex = new RegExp("^((1[1-9])|([2-9][0-9]))((3[0-9]{3}[0-9]{4})|(9?[0-9]{3}[0-9]{5}))$");
	return regex.test(String(phone).replace(/\D/gi, ""));
};

export const isUrlValid = (url: string): boolean => {
	if (typeof url !== "string") {
		return false;
	}
	var regex = /^[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/gi;

	regex =
		/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i;

	return regex.test(url);
};

export function isEmpty(obj: object): obj is {} {
	for (const key in obj) {
		if (Object.prototype.hasOwnProperty.call(obj, key)) {
			return false;
		}
	}
	return true;
}
