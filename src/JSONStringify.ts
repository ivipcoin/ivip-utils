import { isArray, isObject, isString, isBoolean, isNumber, isNull, isNotNumber, isInfinity, isDate, isUndefined, isFunction, isSymbol } from "./validation";

const JSONStringify = (obj: any): string => {
	const restOfDataTypes = (value: any): boolean => {
		return isNumber(value) || isString(value) || isBoolean(value);
	};

	const ignoreDataTypes = (value: any): boolean => {
		return isUndefined(value) || isFunction(value) || isSymbol(value);
	};

	const nullDataTypes = (value: any): boolean => {
		return isNotNumber(value) || isInfinity(value) || isNull(value);
	};

	const arrayValuesNullTypes = (value: any): boolean => {
		return isNotNumber(value) || isInfinity(value) || isNull(value) || ignoreDataTypes(value);
	};

	const removeComma = (str: string) => {
		const tempArr = str.split("");
		tempArr.pop();
		return tempArr.join("");
	};

	if (ignoreDataTypes(obj)) {
		return "{}";
	}

	if (isDate(obj)) {
		return `"${obj.toISOString()}"`;
	}

	if (nullDataTypes(obj)) {
		return `${null}`;
	}

	if (isSymbol(obj)) {
		return "{}";
	}

	if (restOfDataTypes(obj)) {
		return JSON.stringify(obj);
	}

	if (isArray(obj)) {
		let arrStr = "";
		obj.forEach((eachValue: any) => {
			arrStr += arrayValuesNullTypes(eachValue) ? JSONStringify(null) : JSONStringify(eachValue);
			arrStr += ",";
		});

		return `[` + removeComma(arrStr) + `]`;
	}

	if (isObject(obj)) {
		let objStr = "";

		const objKeys = Object.keys(obj);

		objKeys.forEach((eachKey) => {
			const eachValue = obj[eachKey];
			objStr += !ignoreDataTypes(eachValue) ? `"${eachKey}":${JSONStringify(eachValue)},` : "";
		});
		return `{` + removeComma(objStr) + `}`;
	}

	return "{}";
};

export default JSONStringify;
