"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmpty = exports.isUrlValid = exports.isPhoneValid = exports.isPasswordValid = exports.isEmailValid = exports.isBuffer = exports.isSymbol = exports.isFunction = exports.isUndefined = exports.isDate = exports.isInfinity = exports.isNotNumber = exports.isNull = exports.isFloat = exports.isInt = exports.isNumber = exports.isBoolean = exports.isString = exports.isJson = exports.isObject = exports.isTypedArray = exports.isArray = void 0;
const isArray = (value) => {
    return Array.isArray(value) && typeof value === "object";
};
exports.isArray = isArray;
const isTypedArray = (val) => typeof val === "object" && ["ArrayBuffer", "Buffer", "Uint8Array", "Uint16Array", "Uint32Array", "Int8Array", "Int16Array", "Int32Array"].includes(val.constructor.name);
exports.isTypedArray = isTypedArray;
const isObject = (value) => {
    return typeof value === "object" && value !== null && !Array.isArray(value);
};
exports.isObject = isObject;
const isJson = (value) => {
    try {
        const result = JSON.parse(typeof value === "string" ? value : JSON.stringify(value));
        return (0, exports.isObject)(result);
    }
    catch (_a) {
        return false;
    }
};
exports.isJson = isJson;
const isString = (value) => {
    return typeof value === "string";
};
exports.isString = isString;
const isBoolean = (value) => {
    return typeof value === "boolean";
};
exports.isBoolean = isBoolean;
const isNumber = (value) => {
    return typeof value === "number" && Number(value) === value;
};
exports.isNumber = isNumber;
const isInt = (value) => {
    return (0, exports.isNumber)(value) && value % 1 === 0;
};
exports.isInt = isInt;
const isFloat = (value) => {
    return (0, exports.isNumber)(value) && value % 1 !== 0;
};
exports.isFloat = isFloat;
const isNull = (value) => {
    return value === null && typeof value === "object";
};
exports.isNull = isNull;
const isNotNumber = (value) => {
    return typeof value === "number" && isNaN(value);
};
exports.isNotNumber = isNotNumber;
const isInfinity = (value) => {
    return typeof value === "number" && !isFinite(value);
};
exports.isInfinity = isInfinity;
const isDate = (value) => {
    return value instanceof Date || (typeof value === "object" && value !== null && typeof value.getMonth === "function") || (typeof value === "string" && !isNaN(Date.parse(value)));
};
exports.isDate = isDate;
const isUndefined = (value) => {
    return value === undefined && typeof value === "undefined";
};
exports.isUndefined = isUndefined;
const isFunction = (value) => {
    return typeof value === "function";
};
exports.isFunction = isFunction;
const isSymbol = (value) => {
    return typeof value === "symbol";
};
exports.isSymbol = isSymbol;
const isBuffer = (obj) => {
    return obj != null && obj.constructor != null && typeof obj.constructor.isBuffer === "function" && obj.constructor.isBuffer(obj);
};
exports.isBuffer = isBuffer;
const isEmailValid = (email) => {
    if (typeof email !== "string") {
        return false;
    }
    const regex = /^\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b$/gi;
    return regex.test(email);
};
exports.isEmailValid = isEmailValid;
const isPasswordValid = (password) => {
    if (typeof password !== "string") {
        return false;
    }
    var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
    return regex.test(password);
};
exports.isPasswordValid = isPasswordValid;
const isPhoneValid = (phone) => {
    if (typeof phone !== "string") {
        return false;
    }
    var regex = new RegExp("^((1[1-9])|([2-9][0-9]))((3[0-9]{3}[0-9]{4})|(9?[0-9]{3}[0-9]{5}))$");
    return regex.test(String(phone).replace(/\D/gi, ""));
};
exports.isPhoneValid = isPhoneValid;
const isUrlValid = (url) => {
    if (typeof url !== "string") {
        return false;
    }
    var regex = /^[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/gi;
    regex =
        /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i;
    return regex.test(url);
};
exports.isUrlValid = isUrlValid;
function isEmpty(obj) {
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            return false;
        }
    }
    return true;
}
exports.isEmpty = isEmpty;
//# sourceMappingURL=validation.js.map