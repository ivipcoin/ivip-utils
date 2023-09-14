"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const validation_1 = require("./validation");
const JSONStringify = (obj) => {
    const restOfDataTypes = (value) => {
        return (0, validation_1.isNumber)(value) || (0, validation_1.isString)(value) || (0, validation_1.isBoolean)(value);
    };
    const ignoreDataTypes = (value) => {
        return (0, validation_1.isUndefined)(value) || (0, validation_1.isFunction)(value) || (0, validation_1.isSymbol)(value);
    };
    const nullDataTypes = (value) => {
        return (0, validation_1.isNotNumber)(value) || (0, validation_1.isInfinity)(value) || (0, validation_1.isNull)(value);
    };
    const arrayValuesNullTypes = (value) => {
        return (0, validation_1.isNotNumber)(value) || (0, validation_1.isInfinity)(value) || (0, validation_1.isNull)(value) || ignoreDataTypes(value);
    };
    const removeComma = (str) => {
        const tempArr = str.split("");
        tempArr.pop();
        return tempArr.join("");
    };
    if (ignoreDataTypes(obj)) {
        return "{}";
    }
    if ((0, validation_1.isDate)(obj)) {
        return `"${new Date(obj).toISOString()}"`;
    }
    if (nullDataTypes(obj)) {
        return `${null}`;
    }
    if ((0, validation_1.isSymbol)(obj)) {
        return "{}";
    }
    if (restOfDataTypes(obj)) {
        return JSON.stringify(obj);
    }
    if ((0, validation_1.isArray)(obj)) {
        let arrStr = "";
        obj.forEach((eachValue) => {
            arrStr += arrayValuesNullTypes(eachValue) ? JSONStringify(null) : JSONStringify(eachValue);
            arrStr += ",";
        });
        return `[` + removeComma(arrStr) + `]`;
    }
    if ((0, validation_1.isObject)(obj)) {
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
exports.default = JSONStringify;
//# sourceMappingURL=JSONStringify.js.map